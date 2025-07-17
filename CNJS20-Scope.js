/*

Scope means: Where a variable is accessible in the code.
There are 3 Types of Scope:
    → Global Scope
    → Function Scope
    → Block Scope

---------------------------------------------------------------------------------------------

→ Global Scope: If a variable is declared outside any function or block, 
                it can be accessed anywhere in the code.

let x = 10;
function show() {
   console.log(x);  // Works: x is global, we can literally access it from anywhere
}
show();

---------------------------------------------------------------------------------------------

→ Function Scope: If a variable is declared inside a function,
                  it's only accessible within that function.

function test() {
  let y = 20;
  console.log(y);  // Works only inside the function.
}
test();

console.log(y);  // Error: y not defined outside.

---------------------------------------------------------------------------------------------

→ Block Scope: let and const are block scoped. So if declared inside { }, they exist only inside that block.

{
  let z = 30;
  console.log(z);  // Works
}
console.log(z);  // Reference Error, since it's outside the block

--> But var is NOT block scoped — it leaks out of blocks.
{
  var a = 40;
}
console.log(a);  // Works outside the block too.

---------------------------------------------------------------------------------------------
*/
