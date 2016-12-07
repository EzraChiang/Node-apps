var addNote = (title, body) => {
  console.log('Adding Note', title, body);
}

var getAll = () => {
  console.log('Getting all notes');
}

var getNote = (title) => {
  console.log('Reading', title);
}

module.exports = {
  addNote,
  getAll,
  getNote
}
