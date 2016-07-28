
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
storage.add([7, 55, 90, 86, 74, 30]);
storage.add([3, 5, 6, 7, 89, 90, 92]);
storage.add([77, 78, 79]);


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

app.post('/items', jsonParser, function(request, response) {
    if (!request.body) {
        return response.sendStatus(400);
    }

    var item = storage.add(request.body.name);
    response.status(201).json(item);
    console.log(storage.items);
});

/*=========================
        PUT METHOD
==========================*/

app.put('/items/:id', jsonParser, function(request, response) {
    console.log(request.body.name, '<-- reques.body.name');
    if (!request.body) {
        return response.sendStatus(400);
    }

    var newName = request.body.name;
    var id = request.params.id;

    for(var i in storage.items) {
        if (id === i) {
            // storage[i].name = newName
            console.log(newName, '<--- newName');
        }
    }
});

/*=========================
        DELETE METHOD
==========================*/

app.delete('/items/:id', function(request, response) {
    var itemID = request.params.id;
    storage.items.forEach (function(value, index){
        // console.log(value);
        // console.log(itemID, value.id);
        if (parseInt(itemID) === value.id) {
            var removedItem = storage.items.splice(index, 1);
            console.log(removedItem, '<-- removed');
            return response.status(200).json(removedItem);
        }
        console.log(typeof itemID, "itemID");
        console.log(typeof value.id, "value.id");
    });
    return response.sendStatus(404);
});

// Binds and listens for connections on port 8080
app.listen(process.env.PORT || 8080);
