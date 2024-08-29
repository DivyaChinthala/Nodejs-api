const express = require("express");
const moviesController = require("../Controllers/moviesController");
const validateMovie = require("../Middlewares/validateMovie");

const moviesRouter = express.Router();

moviesRouter
  .route("/")
  .get(moviesController.fetchMovies)
  .post(validateMovie, moviesController.createMovie);

moviesRouter
  .route("/:id")
  .get(moviesController.fetchMovie)
  .patch(moviesController.updatedMovie)
  .delete(moviesController.deleteMovie);
module.exports = moviesRouter;
