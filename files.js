const fs = require("fs");

const contentIn = fs.readFileSync("./files/input.txt", "utf-8");
console.log(contentIn);

const contentOut = `Data read from file input.txt: ${contentIn}. \nDate Created - ${new Date()}`;
fs.writeFileSync("./files/output.txt", contentOut);
