const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./index.html", "utf-8");
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/" || path.toLowerCase() == "/home") {
    res.end(html.replace("{{Content}}", "You are in Home page"));
  } else if (path.toLowerCase() == "/about") {
    res.end(html.replace("{{Content}}", "You are in About page"));
  } else if (path.toLowerCase() == "/contact") {
    res.end(html.replace("{{Content}}", "You are in Contact page"));
  } else {
    res.end(html.replace("{{Content}}", "Page not Found"));
  }
});
server.listen(9000, "localhost", () => {
  console.log("Server started listening......");
});
