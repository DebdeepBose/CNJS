// Let's see some string operations

const s = "Bravo Vince";

const ls = s.toLowerCase();
console.log(ls); // Converts the whole string to lowercase → "bravo vince"

const us = s.toUpperCase();
console.log(us); // Converts the whole string to uppercase → "BRAVO VINCE"

const sChar = s.charAt(5); // Gets the character at index 5
console.log("__" + sChar + "__"); // Whitespace, which is the 6th character (index 5)

const findChar = s.indexOf('V'); // Gets the index of V
console.log(findChar);  // 6

const ASCII = s.charCodeAt(2); // Gets ASCII value of character at index 2
console.log(ASCII); // ASCII of 'a' is 97

let s2 = " White";
let s3 = "Skyler";
let s4 = " Yo";
let ted = s3.concat(s2.concat(s4)); // Concatenates even in nested
console.log(ted); // Prints the full concatenated string

const bravo = s.endsWith("Vince"); // Checks if the string ends with "Vince"
console.log(bravo); // true

const vravo = s.includes("Bince"); // Doesn't have "Bince"
console.log(vravo); // false

const len = s.length; // Checks length (no parentheses)
console.log(len); // 11

const compS = "Vin";
let compare = s.localeCompare(compS); // Compares lexicographically: -1 if smaller, 0 if equal, 1 if greater
console.log(compare); // -1 → because "Bravo Vince" comes before "Vin" alphabetically

const sliceS = s.slice(6, 11); // Cuts from index 6 to 10 (end not included)
console.log(sliceS); // Prints "Vince"

const substrS = s.substring(0, 5); // Gets characters from index 0 to 4
console.log(substrS); // Prints "Bravo"

const splitS = s.split(" "); // Splits the string wherever there's a space
console.log(splitS); // [ 'Bravo', 'Vince' ]

const padded = "   Hello World!   ";
const trimS = padded.trim(); // Removes leading & trailing whitespace
console.log("__" + trimS + "__"); // "__Hello World!__"

const replaced = s.replace("Vince", "Gilligan"); // Replaces Vince with Gilligan
console.log(replaced); // "Bravo Gilligan"

const repeatS = s.repeat(2); // Repeats the string twice
console.log(repeatS); // "Bravo VinceBravo Vince"
