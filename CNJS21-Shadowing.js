// Shadowing means: A variable declared in an inner scope (like a block or function) 
//                  can "hide" or "override" a variable with the same name in an outer scope.


// Using var
var a = 100;
console.log(a); // Prints 100, since it's just declared
{
    var a = 10;
    console.log(a); // Prints 10, overrides the outer 'a' due to function scope of var
}
console.log(a); // Still prints 10 because var is function scoped, not block scoped

function myVar() {
    console.log(a);
}
myVar(); // Prints 10 as well, since 'a' was globally overwritten from 100 to 10

//-----------------------------------------------------------------------------------------


// Now let's try with let

let b = 200;
console.log(b); // Prints 200, since it's just declared
{
    let b = 20;
    console.log(b); // Prints 20, shadows the outer 'b' within this block
}
console.log(b); // Prints 200 because outer 'b' is not affected (let is block scoped)

