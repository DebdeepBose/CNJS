// Heap Memory stores non-primitive values, like objects and arrays.
// It stores a reference (not the actual value), so if we make a change, the original also changes.

let obj1 = {
    firstName: "Jesse",
    lastName: "Pinkman"
};

let obj2 = obj1; // Stores the reference
obj2.firstName = "Jane"; // Changes the reference

console.log(obj1); // As we can see, both of them changed
console.log(obj2); // Because they point to the same memory


// Let's try another one with an array

let arr1 = [1, 2, [3, 4, 5], 6];
let arr2 = arr1;

arr2[1] = 7; // This also changes arr1

console.log(arr1); // Same thing, it got changed
console.log(arr2); // Both are still pointing to the same array
