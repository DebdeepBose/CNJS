// Let's talk about numbers and a few related operations

let num1 = 5343;
let str1 = num1.toString(); // Converts the number to a string 

console.log(`${str1} is a type of ${typeof str1}`); // Prints 5343 is a type of string

let num2 = 975.61013;

// Say I need upto 2 decimals so I can use toFixed
console.log(num2.toFixed(2)); // Prints 975.61 , Works only on decimals

// Say I need precise value with total digits
console.log(num2.toPrecision(3)); // Prints 976 , Rounds off if next digit >= 5

const lowestInfluencerIncome = 1000000000;
console.log(lowestInfluencerIncome.toLocaleString('en-US')); // Adds comma for readability 
// For Indian, we can go for 'en-IN'                        // (Not like you'll ever earn that much 💀)

// Let's learn some math operations next

let cinema = -101;
console.log(Math.abs(cinema)); // Absolute Cinema, prints 101

console.log(Math.cbrt(Math.sqrt(64))); // sqrt prints square root , cbrt prints cube root

console.log(Math.max(1, 2, 3, 4, 5, 7) + " " + Math.min(7, 6, 5, 8)); 
// Prints 7 and 5 , the maximum and minimum value

// But what if we wanna find the max element in an array?
// In that case once again we can use our spread operator [...]
let arr = [2, 3, 5, 26, 73, 13];
console.log(Math.max(...arr)); // Prints 73

console.log(Math.ceil(5.4) + " " + Math.floor(5.4)); // ceil rounds UP to 6, floor rounds DOWN to 5



