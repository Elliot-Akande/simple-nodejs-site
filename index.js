const express = require("express");
const fs = require("node:fs");
const app = express();

const port = 8080;

const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

app.get("/", (req, res) => {
  fs.readFile("index.html", "utf8", (err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", "utf8", (err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
});

app.get("/contact-me", (req, res) => {
  fs.readFile("contact-me.html", "utf8", (err, data) => {
    if (err) throw new Error(err);
    res.send(data);
  });
});

app.get("*", function (req, res) {
  fs.readFile("404.html", "utf8", (err, data) => {
    if (err) throw new Error(err);
    res.status(404).send(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
