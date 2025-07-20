/*
IIFE stands for Immediately Invoked Function Expression.

Two reasons why we use IIFE:
→ To avoid polluting the global scope.
→ It gets executed immediately after it's defined.
*/

// Let's see the syntax:

(function connectDB() {
  console.log("Database Connected");
})(); //<-- Semi-Colon is a must, otherwise the next IIFE will throw an error.

// The first parentheses wrap the function expression,
// The second pair immediately invokes (executes) it.


// Arrow functions can also be used with IIFE. Let's see that along with a parameterized IIFE:

((color) => {
  console.log(`Jesse ${color}man`); // Prints: Jesse Pinkman
})("Pink");
