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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58530f0821e79d18d40c4712")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5852f41b7cb2630b46f26146")
  }, {
    $set: {
      name: 'Ezra Chiang',
      location: 'Sacramento'
    },
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
