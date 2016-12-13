const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page Not Found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([{name: 'Ezra Chiang', age: '23'}, {name: 'Ross Gellar', age: 30}, {name: 'Joey Tribiani', age: 30}]);
});

app.listen(3000);
module.exports.app = app;
