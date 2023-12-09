const http = require("node:http");

const server = http.createServer((req, res) => {
    const superHero = {
        firstName :" Bruce",
        lastName: "Lee"
    }
  res.writeHead(200,{"Content-Type":"application/json"});
  res.end(JSON.stringify(superHero));
});

server.listen(3000, (req, res) => {
  console.log(`server started on port 3000 successfully`);
});
