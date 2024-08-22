const http = require("http");
const fs = require("fs");
const url = require("url");
const replaceHtml = require("./modules/replaceHtml");

const html = fs.readFileSync("./templates/index.html", "utf-8");
const todos = fs.readFileSync("./data/todo.json", "utf-8");
const todoList = fs.readFileSync("./templates/todos-list.html", "utf-8");
const todosJson = JSON.parse(todos);

const server = http.createServer((req, res) => {
  const { query, pathname: path } = url.parse(req.url, true);
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
      "Content-Type": "text/html",
    });
    if (query.id) {
      res.end(
        html.replace(
          "{{Content}}",
          "This is the Single Todo View page - " + query.id
        )
      );
    } else {
      const todosHtml = todosJson.map((todo) => {
        return replaceHtml(todoList, todo);
      });
      res.end(html.replace("{{Content}}", todosHtml.join("")));
    }
  } else if (path.toLowerCase() == "/write-file") {
    const wr = fs.createWriteStream("./files/large-file.txt");
    const rs = fs.readFileSync("./files/append.txt");
    for (let i = 0; i <= 100000; i++) {
      wr.write("\r\n");
      wr.write(rs);
    }
    res.end("File Written Successfully");
  } else if (path.toLowerCase() == "/read-file") {
    const readStream = fs.createReadStream("./files/large-file.txt");
    readStream.on("data", (chunk) => {
      res.write(chunk);
    });
    readStream.on("error", (error) => {
      res.end(error.message || "Something went wrong");
    });
    readStream.on("end", () => {
      res.end();
    });
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
