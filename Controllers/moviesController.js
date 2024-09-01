const fs = require("fs");
const Movie = require("../Models/movies");
const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

const fetchMovies = (req, res) => {};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      ...req.body,
    });
    res.status(200).json({
      status: "success",
      data: {
        movie: movie,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.errmsg,
    });
  }
};

function fetchMovie(req, res) {}

const updatedMovie = (req, res) => {};

const deleteMovie = (req, res) => {};

module.exports = {
  fetchMovies,
  fetchMovie,
  createMovie,
  updatedMovie,
  deleteMovie,
};
