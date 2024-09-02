require("dotenv").config();
const fs = require("fs");
const mongoose = require("mongoose");
const Movie = require("../Models/movies");
const movies = JSON.parse(fs.readFileSync("Data/movies.json"));

mongoose
  .connect(process.env.DB_CONN_STR, {})
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Error while connecting to DB");
  });

const deleteMovies = async () => {
  try {
    await Movie.deleteMany();
    console.log("Movies Deleted Successfully");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

const importMovies = async () => {
  try {
    await Movie.create(movies);
    console.log("Movies Imported Successfully");
    process.exit();
  } catch (err) {
    console.log(err.message);
  }
};

if (process.argv[2] == "--import") {
  importMovies();
}
if (process.argv[2] == "--delete") {
  deleteMovies();
}

console.log(process.argv);
