const path = require("path");
const fs = require("fs");

// console.log(__dirname);
// console.log(path.join("subfolder"));
// console.log(path.resolve("subfolder"));

fs.readFile("./input.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile("./output.txt", result, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  }
});
