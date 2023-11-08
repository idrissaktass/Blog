const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const BlogModel = require("./Model");
const RecipeModel = require("./models/Recipe");
const TipModel = require("./models/HealthTip");
const StoryModel = require("./models/Story");
const BookModel = require("./models/Book")
const MovieModel =  require("./models/Movie")
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (req, res) => {
  res.send("Welcome to the blog server!");
});

app.get("/advices", (req, res) => {
  res.send("Welcome to the blog server!");
});

app.get("/blogs", async (req, res) => {
  try {
    const result = await BlogModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});
app.get("/recipes", async (req, res) => {
  try {
    const result = await RecipeModel.find({});
    res.json(result);
    console.log("Fetched recipesssss:", result); // Add this line
  } catch (err) {
    res.json(err);
  }
});

app.get("/recipes/:recipeId", async (req, res) => {
  const recipeId = req.params.recipeId;

  try {
    const result = await RecipeModel.findById(recipeId);
    if (!result) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});


app.get("/books", async (req, res) => {
  try {
    const result = await BookModel.find({});
    res.json(result);
    console.log("Fetched books:", result); // Add this line
  } catch (err) {
    res.json(err);
  }
});

app.get("/books/:bookId", async (req, res) => {
  const bookId = req.params.bookId;

  try {
    const result = await BookModel.findById(bookId);
    if (!result) {
      res.status(404).json({ message: "Book not found" });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/movies", async (req, res) => {
  try {
    const result = await MovieModel.find({});
    res.json(result);
    console.log("Fetched movies:", result); // Add this line
  } catch (err) {
    res.json(err);
  }
});

app.get("/movies/:movieId", async (req, res) => {
  const movieId = req.params.movieId;

  try {
    const result = await MovieModel.findById(movieId);
    if (!result) {
      res.status(404).json({ message: "Movie not found" });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/stories", async (req, res) => {
  try {
    const result = await StoryModel.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

app.get("/stories/:storyId", async (req, res) => {
  const storyId = req.params.storyId;

  try {
    const result = await StoryModel.findById(storyId);
    if (!result) {
      res.status(404).json({ message: "Story not found" });
      return;
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/createRecipe", async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipeModel(recipe);
  await newRecipe.save();
  res.json(recipe);
});

app.post("/createBlog", async (req, res) => {
    const blog = req.body;
    const newBlog = new BlogModel(blog);
    await newBlog.save();
    res.json(blog);
});

app.post("/createStory", async (req, res) => {
  const story = req.body;
  const newStory = new StoryModel(story);
  await newStory.save();
  res.json(story);
});

app.post("/createBook", async (req, res) => {
  try {
    const book = req.body;
    const newBook = new BookModel(book);
    await newBook.save();
    res.json(newBook);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});
app.post("/createMovie", async (req, res) => {
  try {
    const movie = req.body;
    const newMovie = new MovieModel(movie);
    await newMovie.save();
    res.json(newMovie);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.delete("/recipes/:recipeId", async (req, res) => {
  const recipeId = req.params.recipeId;
  console.log("hey:", recipeId)
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      res.status(404).json({ message: "Recipe not found" });
      return;
    }
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});
// app.delete("/healthtips/:healthtipId", async (req, res) => {
//   const healthtipId = req.params.healthtipId;

//   try {
//     const deletedHealthTip = await TipModel.findByIdAndDelete(healthtipId);
//     if (!deletedHealthTip) {
//       res.status(404).json({ message: "Health tip not found" });
//       return;
//     }
//     res.json({ message: "Health tip deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
app.delete("/stories/:storyId", async (req, res) => {
  const storyId = req.params.storyId;

  try {
    const deletedStory = await StoryModel.findByIdAndDelete(storyId);
    if (!deletedStory) {
      res.status(404).json({ message: "Story not found" });
      return;
    }
    res.json({ message: "Story deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});
const multer = require("multer");

// Define storage for the uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads"); // Set the destination folder for uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate unique filenames
  },
});

const upload = multer({ storage: storage });
app.use(express.static("public"));
app.use(multer({ storage: storage }).single("image"));
// Use the upload middleware in your createstory route
app.post("/createstory", upload.single("image"), async (req, res) => {
  // Retrieve other form data

  const { title, summary, text, name, } = req.body;

  // Access uploaded image file using req.file
  const imagePath = req.file.path;
  console.log("Image Path:", imagePath);

  // Create and save the story using the data, including the image path
  const newStory = new StoryModel({
    title,
    summary,
    text,
    name,
    image: imagePath,
  });

  try {
    await newStory.save();
    res.json(newStory);
  } catch (err) {
    res.json(err);
  }
});

  
app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!"); });
