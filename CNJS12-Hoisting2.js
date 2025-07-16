/*
Hoisting-2

What if we use an arrow function instead of a regular function?
*/

getName(); // TypeError: getName is not a function

var getName = () => {
  console.log("Barry");
};

/*
Output:
TypeError: getName is not a function

Why?

- Arrow functions are treated like variables.
- So only the variable name `getName` is hoisted, not the function itself.
- At the time of the call, getName is still `undefined`.
- Calling undefined like a function causes a TypeError.

To Remember:
- Function declarations are fully hoisted (work before they're written).
- Arrow functions are not. Treat them like variables.
- Always define arrow functions before using them.

*/

/*
undefined [vs] not defined in JavaScript

--> undefined <--

→ 'undefined' means the variable exists but has no value yet.
→ JavaScript automatically assigns 'undefined' to it.

Example:
*/
var x;
console.log(x); // undefined

/*
Explanation:
- x is declared using 'var'
- It exists in memory but has no value yet
- So it logs 'undefined'
*/

/*
 --> not defined <--

→ 'not defined' means the variable doesn't exist at all in memory.
→ Trying to use it will throw a ReferenceError.

Example:
*/

console.log(y); // ReferenceError: y is not defined

/*
Explanation:
- y was never declared anywhere in the code
- So the JavaScript engine cannot find it in memory
- It throws a ReferenceError instead of 'undefined'
*/



