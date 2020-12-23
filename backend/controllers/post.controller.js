const Post = require("../models/post.model")

async function getAll(req, res) {
    try {
        const response = await Post.find()
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
        console.error(error)
    }
}

async function add(req, res) {
    try {
        const response = await Post.create(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json(error)
        console.error(error)
    }
}

module.exports = { getAll, add }