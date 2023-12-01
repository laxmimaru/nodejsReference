const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (error, data) => {
    if (error) {
      res.writeHead(404);
      res.write("Error:File not found");
    } else {
      res.write(data);
    }
  });
  //res.end();
});

server.listen(3000, (error) => {
  if (error) {
    console.log("error in starting the server");
  } else {
    console.log("server started successfully on the port 3000");
  }
});
