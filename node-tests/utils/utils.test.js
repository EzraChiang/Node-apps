const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);

  if (res !== 44) {
    throw new Error(`Expected 44 but got back ${res}.`)
  };
});

it('should square two numbers', () => {
  var res = utils.square(5);

  if (res !== 25) {
    throw new Error(`Expected 25 but got back ${res}`);
  };
});
