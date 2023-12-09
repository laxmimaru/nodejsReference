const http = require("node:http");

const server = http.createServer((req, res) => {
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end("http server demo");
});

server.listen(3000, (req, res) => {
  console.log(`server started on port 3000 successfully`);
});
