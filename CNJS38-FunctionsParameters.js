// Let's define a simple function to print a name
const sayMyName = () => {
  console.log("Heisenberg");
};

// If we reference the function without parentheses, like this:
sayMyName; // It does NOT execute. It just gives us the function definition (reference).

// To actually run or "invoke" the function, we must use parentheses:
sayMyName(); // Output: Heisenberg

// Now that the above is a Non-Parameterized Function: Basically, it takes no input
// So let's see a Parameterized function

const nickName = (name) => {
  console.log(`My name is Gustavo Fring, but you can call me ${name}.`);
}; // So this is a parameterized function — basically one that takes input

nickName("Gus");

// There can be multiple parameters as well
const address = (num, mex, typeHouse, typeHouseNum) => {
  console.log(`${num} ${mex} ${typeHouse}-${typeHouseNum}`);
};
address(6353, "Juan Tabo", "Apartment", 6);

// Oh btw, we can totally return values like in other languages. However, there's something to note.
// Say we have a function:
const add = (num1, num2) => {
  return num1 + num2;
};
let sum = add(2, 3);
console.log(sum); // Should be 5, and it is. But what if..

// We do this instead:
let sum2 = add(2, "a");
console.log(sum2); // It gives us "2a" instead of an error or warning.
// So to avoid this, we should always cast the inputs to numbers,
// especially when working with numerical operations.

const addImproved = (num_1, num_2) => {
  const n1 = Number(num_1);
  const n2 = Number(num_2);

  // Check if either input is not a valid number
  if (isNaN(n1) || isNaN(n2)) {
    return "One or both inputs are not valid numbers.";
  }

  return n1 + n2;
};

let ans = addImproved(2, "a");
console.log(ans); // Shows "One or both inputs are not valid numbers."

// Finally, let's talk about default parameters.
// If someone forgets to pass a value, we can still use a default one.

function squidGame(hasHe = "No") {
  if (hasHe === "No") {
    console.log("Season 1, it seems");
  } else {
    console.log("I have played these games before");
  }
}

squidGame("Yes"); // Prints: I have played these games before
squidGame();      // Prints: Season 1, it seems
