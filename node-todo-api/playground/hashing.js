const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc');

//
// var message = 'I am a message';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);
