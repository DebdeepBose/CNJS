// Lets get into type conversion

let score = 33;
console.log(typeof score); // Basic number, so this will return "number"

let scoreStr = "33"; // Inside quotes = string
console.log(typeof scoreStr); // This will return "string"

let toNum = Number(scoreStr); // Number() converts string to number
console.log(toNum); // Now it’s a number

let scoreStr2 = "33abc"; // This string has letters too
let toNum2 = Number(scoreStr2); // JS tries to convert it

console.log(typeof toNum2); // Still returns "number"
console.log(toNum2); // But actually it failed → gives NaN

let uc = undefined;
console.log(Number(uc)); //Still gives Nan

/*
Now what is NaN and why is it considered a number?

→ NaN means Not-a-Number
→ It happens when JS can't convert a value to a valid number
→ Like "33abc" — it starts like a number but ends weird, so JS gets confused

But still:
→ typeof NaN gives "number"
→ Because in JavaScript, NaN is part of the number type (even though it's invalid)

Also:
→ NaN is not equal to anything, not even itself
   console.log(NaN === NaN); // false

To check if something is actually NaN, use:
   Number.isNaN(value); // this returns true only for real NaN

*/
