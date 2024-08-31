const express = require("express");
const app = express();
const morgan = require("morgan");
const moviesRouter = require("./Routes/moviesRouter");

app.use(express.static("./public"));
app.use(express.json());
if (process.env.NODE_ENV == "dev") {
  app.use(morgan("dev"));
}

app.use("/movies", moviesRouter);

module.exports = app;
