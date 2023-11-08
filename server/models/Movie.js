const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    positive: {
        type: [String], // Here we define 'ingredients' as an array of strings
        required: true
    },
    negative: {
        type: [String], // Here we define 'ingredients' as an array of strings
        required: true
    },
    scale : {
        type: String,
        required: true
    },
    duration : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    }
});

const MovieModel = mongoose.model("movies", MovieSchema);
module.exports = MovieModel;
