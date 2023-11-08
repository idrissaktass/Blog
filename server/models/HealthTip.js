const mongoose = require("mongoose")

const TipSchema = new mongoose.Schema({
    title: {type: String,
        required: true },
    text: {type: String},
    summary: {type: String,
        required: true },
    name: {type: String,
        required: true} 
})

const TipModel = mongoose.model("healthtips",TipSchema);
module.exports = TipModel;