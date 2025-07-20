// Let's learn about Objects
// An object is a non-primitive data structure used to store key-value pairs.
// It holds key value pair.

// Singleton Object: An object created using a constructor (like Object.create or new Object())
// Example:
// let obj = new Object(); // This is a singleton object

// Object Literals: The most common way to create objects
// Example:
let person = {
  name: "Walter White",
  profession: "Chemist",
  alias: "Heisenberg",
};

console.log(person.name); // Outputs: Walter White
console.log(person["alias"]); // Outputs: Heisenberg

// There is an interesting case of objects and symbol, lets see

const sym1 = Symbol("k1");

let obj = {
  sym1: "Key1",
};
console.log(typeof obj.sym1); // Prints string instead of symbol

// So if we want it to be a symbol all we need to do is, enclose key in []
let obj2 = {
  [sym1]: "Key2",
};
console.log(obj2[sym1]);  // Yes u can access only using [], otherwise it will give undefined
console.log(typeof sym1); // Now it prints symbol
