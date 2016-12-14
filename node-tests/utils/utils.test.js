const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res)
      .toBe(44)
      .toBeA('number');

    });

    it('it should asyncAdd two numbers', (done) => {
      utils.asyncAdd(5, 4, (sum) => {
        expect(sum).toBe(9).toBeA('number');
        done();
      });
    });
  });

  describe('#square', () => {
    it('should square two numbers', () => {
      var res = utils.square(5);
      expect(res)
      .toBe(25)
      .toBeA('number');
    });

    it('it should asyncAdd square a number', (done) => {
      utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
      });
    });
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
