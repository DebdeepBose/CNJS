/*
Hoisting is a mechanism in JavaScript where variable and function declarations 
are moved to the top of their scope before code execution.

For example:
*/

getName();
console.log(x);

var x = 7;
function getName() {
  console.log("Barry");
}

/*
Output:
Barry
undefined

Why does this happen?

1. During the memory creation phase (before any code runs), JavaScript scans the code.
2. It hoists (lifts) all variable and function declarations to the top of their scope.
3. Function declarations are fully hoisted with their definitions.
4. Variable declarations (using var) are hoisted but initialized as 'undefined'.

So internally, JavaScript treats the code like this:

var x; // hoisted and initialized as undefined
function getName() {
  console.log("Barry");
}

getName();      // calls the hoisted function → prints "Barry"
console.log(x); // x is hoisted but not assigned yet → prints undefined
x = 7;          // assignment happens after the log

This is why 'Barry' is printed first, and then 'undefined'.

Note:
- let and const are also hoisted, but they stay in a Temporal Dead Zone and throw an error if accessed before declaration.
*/

// ---------------------------------------------------------------------------------------------------------

/*

Instead of var x = 7 , if we go with let/const , it will throw an error

getName();
console.log(x); → ReferenceError

const x = 7;

function getName() {
  console.log("Barry");
}

*/