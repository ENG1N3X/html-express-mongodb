const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = new mongoose.model("Post", postSchema)