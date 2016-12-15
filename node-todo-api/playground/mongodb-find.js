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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5852faba21e79d18d40c3f0b')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  db.collection('Users').find({
    name: 'Ezra Chiang'
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });


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
  // db.close();
});
