// var square = (x) => {
//   var results = x * x;
//   return results;
// };
//
// console.log(square(3));

var square = x => x * x;
console.log(square(3));

var user = {
  name: 'Ezra',
  sayHi: () => {
    //arrow functions do not bind to the 'this' keyword
    console.log(`Hi. ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi. ${this.name}`);
  }
};

console.log(user.sayHiAlt());
//use arrow functions when you can except when you need to bind to this and use arguments;
