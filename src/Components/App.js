const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/movie_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  year: Number,
});

const Movie = mongoose.model("Movie", movieSchema);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
