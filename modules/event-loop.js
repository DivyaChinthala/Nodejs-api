const fs = require("fs");

module.exports = function () {
  console.log("Started Executing Top Level Code");
  setTimeout(() => {
    console.log("Timer Executed");
  }, 0);
  fs.readFile("./files/append.txt", () => {
    console.log("File Read Completed");
    setTimeout(() => {
      console.log("Second Timer");
    }, 0);
    fs.readFile("./files/input.txt", () => {
      console.log("Second File Read");
    });
    setImmediate(() => {
      console.log("Immediate Callback");
    });
  });
  console.log("Completed Executing Top Level Code");
};
