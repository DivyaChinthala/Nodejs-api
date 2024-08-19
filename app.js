const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, we got your request");
  console.log("Received a new request");
});
server.listen(9000, "localhost", () => {
  console.log("Server started listening......");
});
