const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World! Your Node.js app is running on EC2!\n");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
