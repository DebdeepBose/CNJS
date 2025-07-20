// Let's learn .reduce()
// .reduce() is used to reduce an array to a single value
// like a sum, a product, a new object, another array, or anything you want.

// Syntax is:
// array.reduce((accumulator, currentValue, index, array) => {
//   return updatedAccumulator;
// }, initialValue);

// You can skip adding index and array, it will assume the current index and array.
// Let's check an example:

const numero = [1, 2, 3, 4, 5];
const sumNumero = numero.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(sumNumero); // Should print 15
