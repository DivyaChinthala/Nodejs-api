const express = require("express");
const app = express();
const morgan = require("morgan");
const moviesRouter = require("./Routes/moviesRouter");

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
app.use("/movies", moviesRouter);

module.exports = app;
