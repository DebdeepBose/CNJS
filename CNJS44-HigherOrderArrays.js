// Let's learn about Higher Order Arrays

// For-Of Loop
let arr = ["Mark", "Cecil", "Nolan", "", "Title_Card"];

for (const name of arr) {
  console.log(name); // A for-of loop works for arrays, maps, etc.
}

console.log(""); // Adds a blank line for clarity

// But a for-of loop will NOT work on objects
// For objects, we use a For-In Loop

let obj = {
  Mark: "Title_Card",
  Nolan: "Omni-Man",
  Samantha: "Atom-Eve",
  Rex: "Rex Splode",
};

// For-In Loop
for (const hero in obj) {
  console.log(hero); // Prints the keys (real names)
  console.log("");   // Adds space for readability

  console.log(obj[hero]); // Prints the values (superhero names)
  console.log("");         // Adds space again

  console.log(`${hero} is the real name of ${obj[hero]}`); // Full sentence
}

/* So to summarize:
   for-in → works on objects (returns keys)
   for-in on arrays → returns indices, so use arr[key] to access values
   for-in doesnt work on maps
   */
console.log("");


// Now let's try the forEach Loop

arr.forEach((element) => {
  console.log(element); // Prints each element in the array
}); 
// forEach works only on arrays, NOT on objects or array-like structures, 
// however it works perfectly fine with objects inside Arrays

