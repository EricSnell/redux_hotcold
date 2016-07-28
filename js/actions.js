// ACTIONS are like messengers telling REDUCERS (are like event handlers) what action to be done
// Only create ACTIONS that will attach to event listeners

// displays instructions on how to play
var WHAT = 'WHAT';
var what = function() {
  return {
    type: WHAT
  };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
  return {
    type: NEW_GAME
  };
};

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    guess: guess
  };
};

// var score = this.props.game.guessList.length
// Create async actions that make AJAX requests to API fetching, posting, and displaying the value

var POST_SCORE = 'POST_SCORE';
var postScore = function(score) {
  return {
    type: POST_SCORE,
    score: score
  };
};

var DISPLAY_SCORE = 'DISPLAY_SCORE';
var displayScore = function() {
  return {
    type: DISPLAY_SCORE
  };
};

//
//
// Make request to post user score
// var fetchPostScore = function() {
//   return function(dispatch) {
//     var url = 'https://localhost:8000/scores';
//     return fetch(url, {
//       {
//       	method: 'post',
//       	body: JSON.stringify({
//       		email: document.getElementById('email').value
//       		answer: document.getElementById('answer').value
//       	})
//       });
//     }


    ).then(function(response) {
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText)
        error.response = response;
        throw error;
      }
      return response.json();
    })
      .then(function(data) {
        var score = data
      })
  }
}

exports.newGame = newGame;
exports.what = what;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.WHAT = WHAT;
exports.MAKE_GUESS = MAKE_GUESS;
exports.POST_SCORE = POST_SCORE;
exports.postScore = postScore;
exports.DISPLAY_SCORE = DISPLAY_SCORE;
exports.displayScore = displayScore;

// Use Ref for input field
