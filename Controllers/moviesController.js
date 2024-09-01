const Movie = require("../Models/movies");

const fetchMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json({
      status: "success",
      movies,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.errmsg,
    });
  }
};

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

async function fetchMovie(req, res) {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      status: "success",
      movie,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
}

const updatedMovie = (req, res) => {};

const deleteMovie = (req, res) => {};

module.exports = {
  fetchMovies,
  fetchMovie,
  createMovie,
  updatedMovie,
  deleteMovie,
};
