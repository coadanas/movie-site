const express  = require("express");
const postRouters = express.Router();

postRouters
.route("/game-of-thrones-2014")
.get(gameOfThronesFirst)

function gameOfThronesFirst(req, res){
  res.render("../post/game-of-thrones-2014.hbs");
};

postRouters
.route("/game-of-thrones-2013")
.get(gameOfThronesSecond)

function gameOfThronesSecond(req, res){
  res.render("../post/game-of-thrones-2013.hbs");
};

postRouters
.route("/The-Lady-Killer-2023")
.get(TheLadyKiller)

function TheLadyKiller(req, res){
  res.render("../post/The-Lady-Killer-2023.hbs");
};

postRouters
.route("/Three-Of-Us-2023")
.get(ThreeOfUs)

function ThreeOfUs(req, res){
  res.render("../post/Three-Of-Us-2023.hbs");
};

module.exports = postRouters;