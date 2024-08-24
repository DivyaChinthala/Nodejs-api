const fs = require("fs");

// Read & Write File Synchronously
// const contentIn = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(contentIn);

// const contentOut = `Data read from file input.txt: ${contentIn}. \nDate Created - ${new Date()}`;
// fs.writeFileSync("./files/output.txt", contentOut);

// Read & Write File Asynchronously
fs.readFile("./files/start.txt", "utf-8", (error1, data1) => {
  console.log(data1);
  fs.readFile(`./files/${data1}.txt`, "utf-8", (error2, data2) => {
    // console.log(error2);
    console.log(data2);
    fs.readFile("./files/append.txt", "utf-8", (error3, data3) => {
      console.log(data3);
      fs.writeFile(
        "./files/output.txt",
        `Content: ${data1}\n${data2}\n${data3}\nDate: ${new Date()}`,
        () => {
          console.log("Content Written Successfully");
        }
      );
    });
  });
});
console.log("Reading File.....");
