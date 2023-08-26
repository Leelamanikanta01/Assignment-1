const { validationResult } = require("express-validator");

const validateMovie = [
  body("title").notEmpty().withMessage("Title is required"),
  body("genre").notEmpty().withMessage("Genre is required"),
  body("year")
    .isInt({ min: 1800, max: new Date().getFullYear() })
    .withMessage("Invalid year"),
];

app.post("/movies", validateMovie, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
});
