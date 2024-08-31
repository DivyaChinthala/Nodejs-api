require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 9000;
mongoose
  .connect(process.env.DB_CONN_STR, {})
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Error while connecting to DB");
  });

app.listen(port, () => {
  console.log("Server started listening....");
});
