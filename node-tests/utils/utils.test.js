const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res)
    .toBe(44)
    .toBeA('number');

});

it('should square two numbers', () => {
  var res = utils.square(5);

  expect(res)
    .toBe(25)
    .toBeA('number');

});

it('should expect some values', () => {
  var user = {age: 23, DOB: '04/09/1993', favoriteMovie: 'Dark Knight', married: false};
  utils.setName(user, 'Ezra Chiang');
  expect(user)
    .toInclude({
      firstName: 'Ezra',
      lastName: 'Chiang'
    });
});

// it('should expect some values', () => {
//   expect({name: "Ezra"}).toEqual({name: "Ezra"});
//   expect([2,3,4]).toExclude(5);
//   expect({
//     name: "Ezra",
//     age: "23"
//   }).toInclude({
//     name: "Ezra"
//   })
// });
