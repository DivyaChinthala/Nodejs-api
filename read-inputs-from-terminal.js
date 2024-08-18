const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name: ", (answer) => {
  console.log("My name is " + answer);
  rl.close();
});
rl.on("close", () => {
  console.log("------------------");
  console.log("Interface Closed");
  process.exit(0);
});
