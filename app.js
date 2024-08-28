const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");

const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));
const port = 9000;

app.use(express.json());
app.use(morgan("dev"));

const logger = (req, res, next) => {
  console.log("Custom Middleware Code");
  next();
};

app.listen(port, () => {
  console.log("Server started listening....");
});
app.use(logger);

app
  .route("/movies")
  .get((req, res) => {
    res.status(200).json({
      status: "success",
      data: {
        movies: movies,
      },
    });
  })
  .post((req, res) => {
    const data = req.body;
    const newMovie = {
      id: movies.length + 1,
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
  });

app
  .route("/movies/:id")
  .get((req, res) => {
    const params = req.params;
    const existingMovie = movies.find((movie) => movie.id == params.id);
    const existingMovieIndex = movies.findIndex(
      (movie) => movie.id == params.id
    );
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
  })
  .patch((req, res) => {
    const params = req.params;
    const existingMovie = movies.find((movie) => movie.id == params.id);
    const existingMovieIndex = movies.findIndex(
      (movie) => movie.id == params.id
    );
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
  })
  .delete((req, res) => {
    const params = req.params;
    const existingMovie = movies.find((movie) => movie.id == params.id);
    const existingMovieIndex = movies.findIndex(
      (movie) => movie.id == params.id
    );
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
  });
