// We will be covering some extra Function Theory topics

// Function Statement or Function Declaration
function a() {
    console.log("a is invoked");
}
// This way of creating a function is called a function statement or function declaration

// Function Expression
// It basically means we can make a function act like a value by assigning it
var b = function() {
    console.log("b is invoked");
}

// But there is a huge difference
// If we hoist both to the top, 'a' will run just fine but 'b' will throw an error
// because 'b' behaves like any other variable, and so it is undefined at that point

// Now let's learn about anonymous functions
// Anonymous functions are those that do not have a name
// function() {

// } 
// This will give a syntax error if written like this directly
// So what's the use of anonymous functions?
// The answer is: anonymous functions are used where functions need to be used as values



// Now let's learn about Named Function Expression
var c = function xyz() {
    console.log("Named function invoked");
    console.log(xyz);
}

// So it's like an anonymous function,
// but you can give a name to the function as well as to the variable

c();    // Invokes normally
xyz();  // Throws an error


// Let's learn the difference between parameters and arguments

function random(param1, param2) { // These are called parameters
    console.log("");
}
random(1, 2); 
// The values you pass while calling the function are called arguments


// Now let's learn about First-Class Functions

// In JavaScript,
// 1. You can assign a function to a variable
// 2. You can pass a function as an argument to another function
// 3. You can return a function from another function

//This ability of functions to be treated as values in called First-Class Functions

// Assigning a function to a variable
const greet = function() {
    console.log("Hello!");
};

// Passing a function as an argument
function callFunction(fn) {
    fn();
}
callFunction(greet); // Passes greet as an argument and calls it

// Returning a function from another function
function outer() {
    return function inner() {
        console.log("Inner function");
    };
}
const result = outer();
result(); // Calls the returned inner function
