const express = require("express")
const router = express.Router()
const Post = require("../models/post.model")

router.get("/getAll", async (req, res) => {
    try {
        const response = await Post.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
        console.error(error)
    }
})

router.post("/add", async (req, res) => {
    try {
        const response = await Post.create({title: "title", description: "description"})
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
        console.error(error)
    }
})

module.exports = router