// Let's talk about arrays

/*

Arrays, as we know, are non-primitive, so they are stored in heap memory. 
And yeah, of course, there's the whole thing with references, 
like you can't directly change the reference, then there's shallow copy, deep copy, and all that.
Oh btw, arrays in JS are resizable so you can totally change the size.
Example:
*/

let arr = [1, 2, 3, 4, 5];

// Now it can also have a mix of different data types        

let mix = [1, 2, "Buckle", 'M', 'Y', ['S', 'H', 'o', 'e'], { name: "apple", color: "red" }, 4.20];
// So yeah, it's basically a mix

// Alright now we can add elements into an array 
let a = [1, 2];
a.push(3); // Pushes 3
a.push(4); // Pushes 4
a.pop();   // Pops 4
console.log(a); // Prints [1, 2, 3]

// Oh btw there's a method that's kinda avoided

a.unshift(0); // Puts 0 in front but shifts the whole array, kinda costly 
a.shift();    // Shifts back, removing the 0


