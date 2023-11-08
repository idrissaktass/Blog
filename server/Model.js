const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    title: {type: String,
        required: true },
    text: {type: String,
        required: true },
    name: {type: String,
        required: true }
    
})

const BlogModel = mongoose.model("blogs",BlogSchema);
module.exports = BlogModel;