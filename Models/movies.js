const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Movie name is required"],
    unique: true,
  },
  description: String,
  duration: {
    type: Number,
    required: [true, "Duration is required"],
  },
  rating: {
    type: Number,
    default: 1.0,
  },
  totalRatings: {
    type: Number,
  },
  geners: {
    type: [String],
    required: [true, "Geners is required"],
  },
  actors: {
    type: [String],
    required: [true, "Actors is required"],
  },
  directors: {
    type: [String],
    required: [true, "Directors is required"],
  },
  releaseYear: {
    type: Number,
    required: [true, "Release Year is required"],
  },
  ticketPrice: Number,
});
const Movie = mongoose.model("Movie", schema);

module.exports = Movie;
