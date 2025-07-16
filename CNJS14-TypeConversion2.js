// Let's try boolean conversion

let flag1 = true;
let flag2 = false;

console.log(flag1, flag2); // Should give true false respectively
console.log(Boolean(flag1), Boolean(flag2)); // Should give true false after conversion
console.log(typeof flag1, typeof flag2); // Should give boolean and boolean




let num = 1;
let str = "1";

let flagNum = Boolean(num);
let flagStr = Boolean(str);

console.log(flagNum, flagStr); // Should give true and true

let num2 = 2;
let str2 = "2";
let num3 = 0;

let flagNum2 = Boolean(num2);
console.log(flagNum2, Boolean(str2)); // Still gives true true
console.log(Boolean(num3)); // Will give false

//We can conclude that any number whether in string or number itself gives true apart from 0 which gives false




//Let's check alphabets

let al = "abc";
let boolAl = Boolean(al);
console.log(boolAl); // It will still give true

// However if we take more than 1 zero, instead of false it will give true

let mulZ = "000";
console.log(Boolean(mulZ)); // True




// We can also convert anything to string

let exNum = 23;
let exBool = true;

let strExNum = String(exNum);
let strExBool = String(exBool);

console.log(typeof strExNum, typeof strExBool); // Will give string and string




// Finally let's see NaN

let nanCheck = NaN;
console.log(nanCheck);
console.log(typeof nanCheck); // Gives number

// Let's convert NaN

let strNan = String(nanCheck);
let numNan = Number(nanCheck);
let boolNan = Boolean(nanCheck);

console.log(strNan, numNan, boolNan); // Gives NaN NaN false

// Since NaN != NaN hence it gives false
