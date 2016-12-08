console.log('Starting App.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  console.log(notes);
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  }
  else {
    console.log('Note title taken');
  }
}
else if (command === 'list') {
  notes.getAll()
}
else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note was read');
    notes.logNote(note);
  }
  else {
    console.log('Note was unable to be read');
  }
}
else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note was not found';
  console.log(message);
 }
else {
  console.log('Cannot read command');
}
