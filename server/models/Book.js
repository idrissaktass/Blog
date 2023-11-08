const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
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
    authorname: {
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
    pagenumber : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    }
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;
