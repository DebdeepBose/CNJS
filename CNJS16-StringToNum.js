console.log("1" + 2); // Gives "12"
// In JavaScript, if either value is a string,
// the + operator joins them as strings because of type coercion rule.

console.log(1 + "21"); // Gives "121"
// Number gets converted to string → string + string = string join

console.log("1" + "2"); // Gives "12"
// Both are strings → gets joined as string

console.log(1 + 2); // Gives 3
// Both are numbers → added normally

console.log(NaN + 2); // Gives NaN
// NaN is not a real number → adding anything to it gives NaN

console.log(NaN + "2"); // Gives "NaN2"
// NaN becomes string → then joined with "2" as string

console.log(undefined); // Gives undefined
// Just prints the value undefined

console.log(undefined + 3); // Gives NaN
// undefined can't be treated as number → becomes NaN

console.log(undefined + "3"); // Gives "undefined3"
// undefined gets converted to string → joined with "3"

console.log(undefined + NaN); // Gives NaN
// undefined = NaN → NaN + NaN = still NaN

console.log(null + 4); // Gives 4
// null becomes 0 → 0 + 4 = 4

console.log(null + "4"); // Gives "null4"
// null becomes string "null" → joined with "4"

console.log(null + NaN); // Gives NaN
// null = 0 → 0 + NaN = NaN

console.log(null + undefined); // Gives NaN
// null = 0, undefined = NaN → result is NaN

console.log(null + NaN + undefined); // Gives NaN
// null = 0 → 0 + NaN = NaN → NaN + undefined = NaN

/*

Conclusion:
If any value is a string and the operator is +, JavaScript prefers string concatenation
→ This is due to type coercion rules
→ It automatically converts the other value to a string
→ So in mixed types, string wins over number

String has the highest priority during + operations

*/

//In fact Even with multiple numbers, if the first value is a string,
//the entire chain is treated as a string

console.log("1" + 2 + 2 + 2 + 2); // Gives "12222"

//However
console.log(1 + 2 + 2 + 2 + "2"); //Gives 72
// If string comes at the end, everything before it is added numerically, then the string takes over.
// If string comes at the beginning, everything is treated as string joining from the start.

//Like

console.log(1 + 2 + 3 + "4" + 5 + 6); //Gives 6456



