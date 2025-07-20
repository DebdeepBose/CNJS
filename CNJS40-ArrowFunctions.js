// Let's re-visit arrow functions.
// But first, let's create an object and understand the use of the "this" keyword.

const betterCallGus = {
  name: "Gustavo",

  msg: function () {
    let nick = this.name[0] + "us"; // Create a nickname from the first letter of the name
    console.log(`Hello! My name is ${this.name}, but you can call me ${nick}.`);
  }, 
  // The "this" keyword refers to the current object (betterCallGus),
  // so we don't have to hardcode the object name.
};

betterCallGus.msg();

// Since we used the "this" keyword, we can change values dynamically.
betterCallGus.name = "Sam";
betterCallGus.msg(); // All references to "Gustavo" are now replaced by "Sam".

// NOTE: The "this" keyword does not work inside standalone functions,
//       it only works inside object methods or functions defined within objects.

// Now, we already know about arrow functions because we've used them before.
// But let’s look at something called 'implicit return'.

const subtract = (a, b) => b - a; // Simple one-liner with implicit return
let diff = subtract(2, 3);
console.log(diff); // Output: 1

// Also works with parentheses. () means no need to use 'return', but {} does require it.
const multiply = (c, d) => (c * d); // Implicit return with ()
console.log(multiply(2, 3)); // Output: 6




