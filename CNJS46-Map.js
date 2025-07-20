// Alright, so let's talk about Map
// Map stores key-value pairs — literally everyone knows that

// First ofc let's make a Map
const mp = new Map();

// Now let's store some values
mp.set(1, "Dexter");
mp.set(2, "Doakes");
mp.set(3, "Angel");
mp.set(4, "Masuka");
mp.set(5, "Debra");

// Now let's print it
console.log(mp);
// Now as we can see, it gives us literally everything, but sometimes we don't need everything —
// maybe sometimes we need just the keys or just the values, so let's see how we can get that

// 1st Method — forEach
mp.forEach((values) => {
  console.log(values); // This prints only values
});

// Say we just need keys
mp.forEach((values, keys) => {
  console.log(keys); // Yes, here it seems to store value-key pairs, so it's kinda confusing
});

console.log(""); // Space

// So the best method is to use for-of loop
for (const keys of mp.keys()) {
  // much easier access using .keys()
  console.log(keys); // Much easier to print
}

console.log(""); // Space

for (const value of mp.values()) {
  console.log(value); // Prints all values
}

// Now if we need both, we can just de-structure
for (const [key, value] of mp) {
  console.log(`Character ${key} : ${value}`);
}

//Obviously map is not limited to that
const v = [1, 2, 2, 3, 4, 1, 2, 5, 4, 3, 6, 7, 1, 2];
const freq = new Map();

v.forEach((num) => {
  if (freq.has(num)) {
    //Checks if num is already present in the map or not using .has()
    freq.set(num, freq.get(num) + 1); // increment count
  } else {
    freq.set(num, 1); // first occurrence
  }
});

for (const [ele, freqEle] of freq) {
  console.log(`${ele} has appeared ${freqEle} times.`);
}

//We can also add conditionals
for (const [ele, freqEle] of freq) {
  if (freqEle > 2) {
    console.log(ele);
  }
}

//Some other map operators
freq.delete(3); //Deletes the key 3
console.log(freq); //Doesnt have 3 now

freq.clear(); //Clears the entire map
console.log(freq);

// Last Topic: Method Chaining
// We can chain multiple map(), filter(), sort() calls with conditions to suit our needs

let nums = [1, 2, 3, 4, 5, 6];

// Let's chain some maps and filters and store the result in a custom variable
const custom = nums
  .map((num) => num * 10)          // [10, 20, 30, 40, 50, 60]
  .map((num) => num + 1)           // [11, 21, 31, 41, 51, 61]
  .filter((num) => num > 40);      // Only numbers > 40 → [41, 51, 61]

console.log(custom); // Should print [41, 51, 61]
