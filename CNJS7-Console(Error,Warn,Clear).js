/*

console.error() is used to display error messages in the browser’s console
Prints error messages in red (helps highlight serious issues).

Ex : Age cannot be negative.  ← appears in red

*/

const age = -5;
if (age < 0) {
  console.error("Age cannot be negative.");
}
 
/*

console.warn() is used to displwarning messages in the console.
The message appears in yellow text.

Ex : Password is too short.   ← appears in yellow

*/

let password = "1234";
if (password.length < 6) {
  console.warn("Password is too short.");
}

/*

console.clear() 
Clears the console output (not allowed in some restricted environments).

*/

console.clear(); //Output : Console Was Cleared













