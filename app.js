const express = require("express");
const app = express();

const port = 9000;
app.listen(port, () => {
  console.log("Server started listening....");
});
app.get("/", (req, res) => {
  res.status(200).send("<h1>Your Request has received.</h1>");
});
