var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;
var reducers = require('./reducers');
var currentScore

var store = createStore(reducers.hotColdReducer, applyMiddleware(thunk));
module.exports = store;
