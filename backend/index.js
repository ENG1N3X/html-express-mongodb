require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

// Routes
const postsRoute = require("./routes/posts.route");

app.use(express.json());
app.use(cors())

app.use("/api/posts", postsRoute);

const port = 3000;
app.listen(port, () => {
	mongoose
		.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("Database connected."))
		.catch((error) => console.error("Database error, ", error));
	console.log(`Server running on port ${port}!`);
});
