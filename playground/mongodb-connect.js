// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

//object destructuring
// var user = {name: 'Ezra', age: 23};
// var {name} = user;
// console.log(name); //Ezra

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connect to MongoDb Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ezra Chiang',
  //   age: '23',
  //   location: 'Los Angeles'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert into users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.close();
});
