const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = 2387;
const hostname = "0.0.0.0";

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
  console.log(`http://${hostname}:${port}/`);
});

const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

const viewPath = path.join(__dirname, "../tamplates/views");
app.set("view engine", "hbs");
app.set("views", viewPath);

const partials = path.join(__dirname, "../tamplates/partials");
hbs.registerPartials(partials);

app.get("/", (req, res)=>{
  res.render("index.hbs");
});

const postRouters = require("../routers/postRouters");
app.use("/post", postRouters)