// In the previous heap code we took an example. Let's take that once more to understand shallow
// and deep copy.

let arr1 = [1, 2, [3, 4, 5], 6];
let arrSecond1 = [1, 2, [3, 4, 5], 6];

// let arr2 = arr1;
// arr2[1] = 7; // This also changes arr1

// console.log(arr1);  ---> Original got changed
// console.log(arr2);  ---> Both are still pointing to the same array

// Now in order to avoid this, we can use the spread operator [...]
// The spread operator is used to copy the top-level elements

let arr3 = [...arr1]; 
arr3[1] = 7;

console.log(arr1); // As we can see
console.log(arr3); // The original didn't change
// This is called a shallow copy which is:
// Only top-level elements are copied, nested ones still point to the same reference

// But there's a problem — if we make a change to arr3[2], which is a nested array,
// the original will still change, because we made a shallow copy

// In order to avoid this, we can make a deep copy.
// We'll treat arrSecond1 as the original for this example

let arr4 = JSON.parse(JSON.stringify(arrSecond1)); // This creates a deep copy

// Now even if we target the nested array

arr4[2][1] = 40;

// The original won't change

console.log(arrSecond1); // Unchanged
console.log(arr4);       // Only the copy is changed
