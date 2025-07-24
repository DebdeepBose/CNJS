// Let's learn about Callback Functions

// Functions are first-class citizens in JavaScript,
// which means we can pass a function into another function as an argument.
// When we pass a function like this, it is called a callback function.
// Callback functions are mainly used to handle asynchronous operations

setTimeout(function() {
    console.log("Timer");
}, 5000);

function x(y){
    console.log("x");
    y();
}

x(function y(){ // <-- this function is called a callback function
    console.log("y");
})

// Main Thread: It's just a fancy name for the call stack
// Any operation that takes too long and prevents the call 
// stack from moving forward is said to be blocking the main thread.



