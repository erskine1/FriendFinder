
// dependencies

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
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);
    var answers = req.body.scores;
    var answerArr = [];
    for (var i = 0; i < answers.length; i++) {
      var num = parseInt(answers[i]);
      answerArr.push(num);
    }
    console.log(answerArr);

    function difference(a, b) {
      return Math.abs(a - b);
    }

    // array for final differences
    var weights = [];

    for (var j = 0; j < friendData.length; j++) {
      var friend = friendData[j];
      // console.log("Difference between you and " + friend.name);
      
      var diff = 0;
      for (var k = 0; k < answerArr.length; k++) {
        eachDiff = difference(answerArr[k], friend.scores[k]);
        
        diff += eachDiff;
      }
      // diff += difference(answerArr[0], friend.scores[0]);
      // console.log(diff); 
      weights.push(diff);
    }
    var index = weights.indexOf(Math.min(...weights));
    console.log("You are most similar to " + friendData[index].name);
    res.json(friendData[index]);
  });

};