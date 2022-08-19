const express = require("express");
const router = express.Router();
const Movie = require("../Movie.model");

// GET

router.get("/movies", async (req, res) => {
  const movies = await Movie.find().select({ title: 1, director: 1 });
  res.json({ movies });
});

router.get("/movies/:id", async (req, res) => {
  const movies = await Movie.findById(req.params.id); // nous permets de trouve le film grace a l'id. l'id est un objet qui se trouve dans les params.
  res.json({ movies });
});

/*
This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-express-cinema" })
);

module.exports = router;
