const http = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 8080;

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const page = req.url in routes ? routes[req.url] : "404.html";
  fs.readFile(page, "utf8", (err, data) => res.end(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
