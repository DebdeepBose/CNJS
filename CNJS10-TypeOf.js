/*
  typeof is a built-in JavaScript operator used to check the data type
  of a variable or a value. It returns a string indicating the type.

  Examples:
  typeof "Hello"         --> "string"
  typeof undefined       --> "undefined"
  typeof [1, 2, 3]       --> "object"
  typeof function(){}    --> "function"
  typeof (() => {})      --> "function"
  typeof Symbol("id")    --> "symbol"
  typeof BigInt(1000)    --> "bigint"
  typeof null            --> "object"  <-- (explained below)
*/

const s  = typeof "Hello";             // "string"
const u  = typeof undefined;           // "undefined"
const a  = typeof [1, 2, 3];           // "object"
const f  = typeof function() {};       // "function"
const af = typeof (() => {});          // "function"
const sy = typeof Symbol("id");        // "symbol"
const b  = typeof BigInt(1000);        // "bigint"
const nu = typeof null;                // "object" (quirk in JavaScript)

console.log(s);   // string
console.log(u);   // undefined
console.log(a);   // object
console.log(f);   // function
console.log(af);  // function
console.log(sy);  // symbol
console.log(b);   // bigint
console.log(nu);  // object

/*
  Why is typeof null --> "object"?

  In JavaScript, each data type has a tag used internally.
  The type tag for "object" is 000, and null's internal representation is 00000000.
  Because the lowest bits are the same, the typeof operator mistakenly identifies null as "object".
  
  This is a long-standing bug in JavaScript (from its early days) and can't be fixed
  due to backward compatibility.
*/
