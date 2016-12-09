console.log('Staring App');

setTimeout(() => {
  console.log('Inside of Callback');
}, 2000);


setTimeout(() => {
  console.log('2nd timeout works');
}, 0);

console.log('Finishing Up');
