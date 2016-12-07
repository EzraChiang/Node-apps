console.log('Starting App.');

const fs = require('fs');

const os = require('os');

const notes = require('./notes');

var user = os.userInfo();
var res = notes.addNote();
console.log(res);
var add = notes.add(1, 1);
console.log(add);
// fs.appendFile('greetings.txt', `Hello ${user.username} you are ${notes.age}!`, function(err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
