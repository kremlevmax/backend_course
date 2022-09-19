const express = require("express");
const app = express();

const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(path.join("subfolder"));
console.log(path.resolve("subfolder"));
console.log(path.resolve(__dirname, "subfolder"));

app.get("/", (req, res) => {
  const fileStream = fs.createReadStream("./input.txt", "utf8");

  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
