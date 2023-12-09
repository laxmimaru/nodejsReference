const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000, (req, res) => {
  console.log(`server started on port 3000 successfully`);
});
