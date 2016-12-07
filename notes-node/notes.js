// console.log('Starting notes');
//
// console.log(module);

module.exports.age = 23;

module.exports = {
  addNote: () => {
    console.log('addNote');
    return 'New note';
  },
  add: (a, b) => {
    return a + b;
  }

}
