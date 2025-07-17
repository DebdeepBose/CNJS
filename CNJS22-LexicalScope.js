// Lexical Scope means: The scope of a variable is determined by its position in the source code.
// In other words, inner functions have access to variables defined in their outer (parent) functions.


// ------------------- Using var -------------------

function outerVar() {
    var x = 10;

    function innerVar() {
        console.log(x); // Prints 10, because inner function can access x from the outer function
    }

    innerVar();
}
outerVar();

// But remember: var is function scoped
function testVarScope() {
    if (true) {
        var y = 20;
    }
    console.log(y); // Prints 20, because var ignores block scope and is hoisted to the function scope
}
testVarScope();



// ------------------- Using const -------------------

function outerConst() {
    const a = 100;

    function innerConst() {
        console.log(a); // Prints 100, lexical scope allows access to a from the outer function
    }

    innerConst();
}
outerConst();

// const is block scoped
function testConstScope() {
    if (true) {
        const z = 30;
        console.log(z); // Prints 30, inside the same block
    }
    // console.log(z); // ReferenceError: z is not defined, const is not accessible outside the block
}
testConstScope();
