// Let's check out a modern way of writing string

let name = "Hector";
let num = 2;
let say = "Cabron I need to see your boss";

// What we can use is called backticks ``
// The advantage of `` is that we can directly inject variables inside the string

// When we use it

console.log(`${name} says ${num} times ${say}`);

// This ${} is a syntax which means string interpolation
// and helps insert variables or expressions inside the string directly

// Oh btw, we can even run expressions inside ${} and it'll show the updated value

const ran = Math.random();
const ranNum = Math.floor(ran * 100);
num += ranNum;

console.log(`${name} says ${num} times ${say}`); // Change is shown


// Btw we can also declare a string like this

let nephew = "Tuco";
let shotBy = new String("abcdefgHijklmnop");

console.log(nephew);
console.log(shotBy[7] + shotBy[0] + shotBy[13] + shotBy[10]); 
// We access and combine characters using their index just like arrays
