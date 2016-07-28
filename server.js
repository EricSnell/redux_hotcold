
var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


var ScoreStorage = function() {
  this.allScores = [];
  this.id = 0;
}

// Prototype function that adds new items as objects and pushes them to
// the storage items array, then increases the storage's id by 1
ScoreStorage.prototype.add = function(score) {
  var userScore = {score: score, id: this.id};
  this.allScores.push(userScore);
  this.id += 1;
  return userScore;
};

// New storage object that will contain the shopping list items
var scoreStorage = new ScoreStorage();
scoreStorage.add(5);
scoreStorage.add(2);
scoreStorage.add(9);

console.log(scoreStorage);
// Endpoints

var app = express();



/*=========================
        GET METHOD
==========================*/

app.get('/scores', function(request, response) {
    response.json(scoreStorage.allScores);
});


/*=========================
        POST METHOD
==========================*/

app.post('/scores', jsonParser, function(request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }

    var userScore = scoreStorage.add(request.body.score);
    response.status(201).json(userScore);
    console.log(scoreStorage.allScores);
});



// Binds and listens for connections on port 8080
app.listen(process.env.PORT || 8080);
