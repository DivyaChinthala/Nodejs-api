const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./index.html", "utf-8");
const json = fs.readFileSync("./data/todo.json", "utf-8");
const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/" || path.toLowerCase() == "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-custom-header": "Hello World!",
    });
    res.end(html.replace("{{Content}}", "You are in Home page"));
  } else if (path.toLowerCase() == "/about") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-custom-header": "Hello World!",
    });
    res.end(html.replace("{{Content}}", "You are in About page"));
  } else if (path.toLowerCase() == "/contact") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "my-custom-header": "Hello World!",
    });
    res.end(html.replace("{{Content}}", "You are in Contact page"));
  } else if (path.toLowerCase() == "/todos") {
    res.writeHead(200, {
      "Content-Type": "application/json",
      "my-custom-header": "Hello World!",
    });
    res.end(json);
  } else {
    res.writeHead(400, {
      "Content-Type": "text/html",
      "my-custom-header": "Hello World!",
    });
    res.end(html.replace("{{Content}}", "Page not Found"));
  }
});
server.listen(9000, "localhost", () => {
  console.log("Server started listening......");
});
