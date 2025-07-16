// Let's see how null and undefined behave

let u;
let n = null;

console.log(u); // undefined
console.log(n); // null

console.log(typeof u); // undefined
console.log(typeof n); // object (this is a known JavaScript quirk)

// Let's check Boolean conversions

console.log(Boolean(u)); // false
console.log(Boolean(n)); // false





/*
 
Truthy and Falsy values in JavaScript

Falsy values in JS:
- false
- 0
- -0
- 0n (BigInt zero)
- "" (empty string)
- null
- undefined
- NaN

Everything else is truthy:
- true
- any number other than 0 (positive or negative)
- any non-empty string
- [] (empty array)
- {} (empty object)
- function(){} (any function)
*/

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(Boolean("hello")); // true
console.log(Boolean(42)); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true






// Converting null:
console.log(String(null)); // → "null"
console.log(Number(null)); // → 0
console.log(Boolean(null)); // → false

/*
null is a primitive value, so in numeric context, JavaScript treats null as zero.
This is part of JavaScript's abstract operations defined in the ECMAScript specification,
it's not a bug, it’s just how JavaScript is designed.
*/

// Converting undefined:
console.log(String(undefined)); // → "undefined"
console.log(Number(undefined)); // → NaN
console.log(Boolean(undefined)); // → false
