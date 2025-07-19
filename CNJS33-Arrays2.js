// Let's look at a bunch of functions/methods for arrays

let v = [1, 2, 3, 4, 5];

console.log(v.includes(3)); // true, checks if 3 is in the array
console.log(v.indexOf(2)); // gives 1, checks the index of first occurrence of 2
console.log(v.findIndex((x) => x === 4)); // gives 3, finds index where value === 4

let u = v.join(); // Now the values will still be printed but 'u' is a string now

// We also have slice and splice

console.log(v.slice(1, 4)); // Returns [2,3,4], remember slice includes from l to r-1

// Splice also gives you the removed part but splice manipulates the original array while slice doesn't.
console.log(v.splice(3)); // Cuts from index 3, returns [4,5], and v becomes [1,2,3]
console.log(v); // [1,2,3] remains

// Splice syntax is actually splice(start, count), so say we have an array
let x = ["Walt", "Hank", "Skyler", "Marie", "Ted", "Mike"];
// And we wanna remove Skyler, Marie and Ted, so we can do this:
x.splice(2, 3); // Starts from index 2 and removes 3 elements
console.log(x); // ["Walt", "Hank", "Mike"]

// Like string we can totally concatenate other arrays, but ofc it will be nested
let salamanca = ["Tuco", "Lalo", "Hector", ["Twin1", "Twin2"]];
x = x.concat(salamanca); // Adds the whole array
console.log(x); // Concat may look like it flattens 1 level but it doesnt

// U may notice, there's nested array since, concat just merges arrays as-is; it doesn't flatten anything
// so to flat any level we can use flat and infinity

x = x.flat(Infinity); //Flattens everything
console.log(x);

// Btw u can convert a string to an array
const con = Array.from("MyNameIsSkylerWhiteYo");
console.log(con);

// Ok, one last thing, just like from, we also have 'of'
const n1 = 32;
const n2 = 21;
const n3 = 57;
const n4 = 49;

console.log(Array.of(n1, n2, n3, n4)); // Gets added into array [32, 21, 57, 49]
