const utils = require('./utils');

it('should add two numbers', () => {
   var result = utils.add(3, 4);

   if (result !== 7) {
       throw new Error('Expected 12 but got ' + result);
   }
});

it('should square a number', () => {
   var result = utils.square(4);

   if (result !== 16) {
       throw new Error('Expected 16 but got ' + result);
   }
});