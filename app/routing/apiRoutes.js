
// data

var friendData = require("../data/friends");
var questionData = require("../data/questions");

// routing

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.get("/api/questions", function(req, res) {
    res.json(questionData);
  });

  // post requests


};