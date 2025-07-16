let x = 2 > 1;
console.log(x); // Gives true → 2 is greater than 1

console.log("3" > 2); // true , JS converts to number
console.log(1 == "1"); // true → == does type coercion → string becomes number
console.log(1 === "1"); // false → === checks both value and type (strict equality)

// == → Loose Equality (only checks value, not type), same for !=
// === → Strict Equality (checks both value and type), same for !==
console.log(0 == false);   // true → because false becomes 0
console.log(0 === false);  // false → number !== boolean




console.log(2 || 3);     // Gives 2  
// OR (||) returns the first truthy value
// 2 is truthy → so it returns 2, doesn’t even check 3

console.log(2 || null);  // Gives 2 → same reason
console.log(null || 2);  // Gives 2 → null is falsy, so returns next value




console.log(2 && 3);  // Gives 3  
// AND (&&) returns the first falsy value, if none → returns last one
// 2 is truthy → so it checks 3 → 3 is also truthy → returns 3

console.log(2 && null);  // Gives null 
console.log(null && 2);  // Gives null  
// null is falsy → returns null without checking 2



console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null === 0);   // false
console.log(null >= 0);    // true
// This works because JavaScript interprets null >= 0 as: !(null < 0)



"2" > 1       // true  → 2 > 1
"02" > 1      // true  → 2 > 1, due to numeric conversion
"2" < "10"    // false → string comparison (no coercion, both are strings)







