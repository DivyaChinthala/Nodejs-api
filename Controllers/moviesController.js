const fs = require("fs");
const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

const fetchMovies = (req, res) => {
  return res.status(200).json({
    status: "success",
    data: {
      movies: movies,
    },
  });
};

const createMovie = (req, res) => {
  const data = req.body;
  const lastMovie = movies[movies.length - 1];
  const newMovie = {
    id: lastMovie.id + 1,
    ...data,
  };
  const updatedMovies = [...movies, newMovie];
  fs.writeFile("./movies.json", JSON.stringify(updatedMovies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: newMovie,
      },
    });
  });
};

function fetchMovie(req, res) {
  const params = req.params;
  const existingMovie = movies.find((movie) => movie.id == params.id);
  const existingMovieIndex = movies.findIndex((movie) => movie.id == params.id);
  if (!existingMovie) {
    return res.status(400).json({
      status: "fail",
      message: "Movie With Id " + params.id + " not found",
    });
  }
  const data = req.body;
  const updatedMovie = {
    ...existingMovie,
    ...data,
  };
  movies[existingMovieIndex] = updatedMovie;
  fs.writeFile("./movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: updatedMovie,
      },
    });
  });
}

const updatedMovie = (req, res) => {
  const params = req.params;
  const existingMovie = movies.find((movie) => movie.id == params.id);
  const existingMovieIndex = movies.findIndex((movie) => movie.id == params.id);
  if (!existingMovie) {
    return res.status(400).json({
      status: "fail",
      message: "Movie With Id " + params.id + " not found",
    });
  }
  const data = req.body;
  const updatedMovie = {
    ...existingMovie,
    ...data,
  };
  movies[existingMovieIndex] = updatedMovie;
  fs.writeFile("./movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      data: {
        movie: updatedMovie,
      },
    });
  });
};

const deleteMovie = (req, res) => {
  const params = req.params;
  const existingMovie = movies.find((movie) => movie.id == params.id);
  const existingMovieIndex = movies.findIndex((movie) => movie.id == params.id);
  if (!existingMovie) {
    return res.status(400).json({
      status: "fail",
      message: "Movie With Id " + params.id + " not found",
    });
  }
  movies.splice(existingMovieIndex, 1);
  fs.writeFile("./movies.json", JSON.stringify(movies), (err) => {
    res.status(200).json({
      status: "success",
      message: "Movie Deleted Successfully",
    });
  });
};

module.exports = {
  fetchMovies,
  fetchMovie,
  createMovie,
  updatedMovie,
  deleteMovie,
};
