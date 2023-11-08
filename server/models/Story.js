const mongoose = require("mongoose")

const StorySchema = new mongoose.Schema({
    title: {type: String,
        required: true },
    text: {type: String},
    summary: {type: String,
        required: true },
    name: {
        type: String
    },
    image: {
        type: String // Store the image path as a string
    }
})

const StoryModel = mongoose.model("healthStorys",StorySchema);
module.exports = StoryModel;