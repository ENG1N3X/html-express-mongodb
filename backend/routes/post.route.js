const express = require("express")
const router = express.Router()
const busboyBodyParser = require('busboy-body-parser')
const { getAll, add } = require("../controllers/post.controller")

router.get("/getAll", getAll)
router.post("/add", busboyBodyParser(), add)

module.exports = router