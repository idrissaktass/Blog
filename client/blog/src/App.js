import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HealthTips from './components/HealtTips';
import Stories from './components/Stories';
import CreateRecipe from './components/PostRecipe';
import CreateTip from './components/CreateTip';
import CreateStory from './components/CreateStory';
import Recipe from './components/Recipe';
import HealthTip from './components/HealthTip';
import Story from './components/Story';
import Depo from "./components/Depo.png"
import martini from "./components/martini.png"
import Advices from './components/Advices';
import Books from './components/Books';
import Book from './components/Book';
import CreateBook from './components/CreateBook';
import CreateMovie from './components/CreateMovie';
import Movies from './components/Movies';
import Movie from './components/Movie';
function App() {
  const navigate = useNavigate();

  const navigateToRecipes = () => {
    navigate('/recipes');
  };
  const navigateToStories = () => {
    navigate('/stories');
  };
  const navigateToBooks = () => {
    navigate('/books')
  }
  const navigateToMovies = () => {
    navigate('/movies')
  }

  const navigateHome = () => {
    navigate('/');
  };
  const [listofBlogs, setListofBlogs] = useState([]);
  const [listofRecipes, setListofRecipes] = useState([]); // Add listofRecipes state
  const [showRecipe, setShowRecipe] = useState(false); // State to toggle visibility
  const [listofTips, setListofTips] = useState([]);
  const [listofStories, setListofStories] = useState([]);
  const [listofBooks, setListofBooks] = useState([]);
  const [listofMovies, setListofMovies] = useState([]);


  const updateStories = async () => {
    try {
      const response = await fetch("http://localhost:3001/stories");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setListofStories(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3001/recipes");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setListofRecipes(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateBooks = async () => {
    try {
      const response = await fetch("http://localhost:3001/books");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setListofBooks(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const updateMovies = async () => {
    try {
      const response = await fetch("http://localhost:3001/movies");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setListofMovies(data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  const deleteRecipe = async (recipeId) => {
    console.log("Deleting recipe with ID:", recipeId); // Add this line

    try {
      const response = await fetch(`http://localhost:3001/recipes/${recipeId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Update the state to reflect the changes
        setListofRecipes(listofRecipes.filter((recipe) => recipe.id !== recipeId));
        
      }
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  const deleteStory = async (storyId) => {
    try {
      const response = await fetch(`http://localhost:3001/stories/${storyId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // Update the state to reflect the changes
        setListofStories(listofStories.filter((story) => story.id !== storyId));
      }
    } catch (error) {
      console.error("Error deleting story:", error);
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogs");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofBlogs(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("useEffect hook is running...");
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:3001/recipes");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofRecipes(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchStories = async () => {
      try {
        const response = await fetch("http://localhost:3001/stories");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofStories(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofBooks(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:3001/movies");
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setListofMovies(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMovies();
    fetchBooks();
    fetchStories();
    fetchData();
    fetchRecipes();
  }, []); 

  return (
      <div className="App">
      <Navbar />
        <div className="container blogs">
        <Routes>
        <Route path="/advices/*" element={<Advices/>} />
        <Route path="/books" element={<Books/>} />
        <Route path="/movies" element={<Movies/>} />
        <Route path="/books/:bookId" element={<Book/>} />
        <Route path="/movies/:movieId" element={<Movie/>} />
        <Route
        path="/createrecipe"
        element={<CreateRecipe updateRecipes={updateRecipes} />}
        />
        <Route
        path="/createmovie"
        element={<CreateMovie updateMovies={updateMovies} />}
        />
        <Route
        path="/createStory"
        element={<CreateStory updateStories={updateStories} />}
        />
        <Route
        path="/createBook"
        element={<CreateBook updateBooks={updateBooks} />}
        />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
        <Route path="/story/:storyId" element={<Story />} />
        <Route
            path="/recipes"
            element={
              <div>
                {/* Show all the recipes */}
                <Recipes listofRecipes={listofRecipes} onDelete={deleteRecipe}  />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <div className="row blogsDisplay">
                  {/* Show only the first 3 recipes */}
                  {listofRecipes.slice(0, 3).map((recipe) => (
                    <div
                      key={recipe.id}
                      className={`col-sm-${listofRecipes.length < 3 ? '5' : '3'} blog`}
                    >
                      <div className='blogImg'>
                        <img className = "blog-image" src='../ball.png' alt='Recipe' />
                      </div>
                      <div className='blogContent'>
                        <b>{recipe.title}</b>
                      </div>
                    </div>
                  ))}
                  <button  type="button" className="btn btn-outline-success" onClick={navigateToRecipes}>All Recipes</button>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                  </Routes>
                </div>

                <div className="row blogsDisplay">
                  {/* Show only the first 3 recipes */}
                  {listofBooks.slice(0, 3).map((book) => (
                    <div key={book.id} className={`col-sm-${listofBooks.length < 3 ? '5' : '3'} blog`}>
                      <div className='blogImg'>
                       <img className = "blog-image" src={martini}></img>
                      </div>
                      <div className='blogContent'>
                        <b>{book.title} </b>
                      </div>
                    </div>
                  ))}
                  <button  type="button" className="btn btn-outline-success" onClick={navigateToBooks}>All Books</button>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                  </Routes>
                </div>

                <div className="row blogsDisplay">
                  {/* Show only the first 3 recipes */}
                  {listofMovies.slice(0, 3).map((movie) => (
                    <div key={movie.id} className={`col-sm-${listofMovies.length < 3 ? '5' : '3'} blog`}>
                      <div className='blogImg'>
                       <img className = "blog-image" src={martini}></img>
                      </div>
                      <div className='blogContent'>
                        <b>{movie.title} </b>
                      </div>
                    </div>
                  ))}
                  <button  type="button" className="btn btn-outline-success" onClick={navigateToMovies}>All Movies</button>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                  </Routes>
                </div>

                <div className="row blogsDisplay">
                  {/* Show only the first 3 recipes */}
                  {listofStories.slice(0, 3).map((story) => (
                    <div key={story.id} className={`col-sm-${listofStories.length < 3 ? '5' : '3'} story-blog`}>
                      <div className='blogImg'>
                       <img className = "blog-image" src={martini}></img>
                      </div>
                      <div className='storyContent'>
                        <b>{story.title} </b>
                      </div>
                    </div>
                  ))}
                  <button  type="button" className="btn btn-outline-success" onClick={navigateToStories}>All Stories</button>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                  </Routes>
                </div>
              </div>
              
            }
          />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          <Route
            path="/stories"
            element={
              <div>
                {/* Show all the recipes */}
                <Stories listofStories={listofStories}  onDelete={deleteStory} />
              </div>
            }
          />
        </Routes>
        
      </div>
    </div>
  );
  function Home() {
    return <h2></h2>;
  }
}

export default App;
