// Stack stores primitive values, and it doesn't store references.
// It stores a copy, so if a value is changed in the copy, the original is not affected.

let num = 2;
let copyNum = num; // Stores a copy

copyNum = 3; // Now we make a change

console.log(num);     // We can see, the original value remains intact
console.log(copyNum); // Only the copy changed


// Let's try out with strings

let userName = "WalterWhite";
let copyName = userName; // Stores a copy in stack

copyName = "Heisenberg"; // Now we make change to the copy

console.log(userName);  // We can see once again, this value is the same 
console.log(copyName);  // Only the copy changed
