const http = require("http");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/" || path.toLowerCase() == "/home") {
    res.end("You are in Home page");
  } else if (path.toLowerCase() == "/about") {
    res.end("You are in About Page");
  } else if (path.toLowerCase() == "/contact") {
    res.end("You are in Contact Page");
  } else {
    res.end("Page not Found");
  }
});
server.listen(9000, "localhost", () => {
  console.log("Server started listening......");
});
