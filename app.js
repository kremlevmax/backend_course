const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream("./input.txt", "utf8");

  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
