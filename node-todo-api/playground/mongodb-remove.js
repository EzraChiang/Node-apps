const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//removes multiple, empty removes all, pass in parameters
Todo.remove({}).then((result) => {
  console.log(result);
});

//this is for if you need multiple parameters
Todo.findOneAndRemove({_id: '58557d0b9c23787a9211042e'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('58557d0b9c23787a9211042e').then((todo) => {
  console.log(todo);
});
