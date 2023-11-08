const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: [String],
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String], // Here we define 'ingredients' as an array of strings
        required: true
    },
    time : {
        type: String,
        required: true
    },
    serving : {
        type: String,
        required: true
    },
    course : {
        type: String,
        required: true
    }
});

const RecipeModel = mongoose.model("recipes", RecipeSchema);
module.exports = RecipeModel;
