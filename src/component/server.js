const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const books = [
  { id: 1, title: "Book 1", author: "Author 1", price: 10.99 },
  { id: 2, title: "Book 2", author: "Author 2", price: 12.99 },
];

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
