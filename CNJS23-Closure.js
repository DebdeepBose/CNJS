// A closure is created when a function "remembers" the variables 
// from its lexical scope, even after that outer function has finished executing.

function x(){
    var a = 7;
    function y(){
        console.log(a);
        // Tries to find a in local memory, it doesn't find it, so it goes to its lexical parent
    }
    y(); 
}
x(); // Calls x which defines and calls y

// In simple words, closure is the combination of a function bundled together (enclosed) 
// with references to its surrounding environment


//We can also return a fucntion
function x(){
    var a = 7;
    function y(){
        console.log(a);
        // Tries to find a in local memory, it doesn't find it, so it goes to its lexical parent
    }
    return y;
}
x(); // Invokes x which defines and calls y