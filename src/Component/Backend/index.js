const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movies");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/movieDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/movies", movieRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
