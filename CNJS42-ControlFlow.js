// Let's learn about Control Flow & Control Flow Statements

// First up: if, if-else, and else statements

if (3 > 2) {
  console.log("Yeah"); // Classic if-else statement
} else if (3 < 2) {
  console.log("Nah");
} else {
  console.log("Meh");
}

// While we're at it, let's revisit == and ===

if (2 == "2") {
  console.log("Value is same"); // Loose equality: compares only value
} else if (2 === "2") {
  console.log("Value and data type are same"); // Strict equality: compares value + type
}

// We can even use strings in conditions

const sayMyName = (name) => {
  if (name === "Heisenberg") {
    console.log("You're goddamn right.");
  } else {
    console.log("You're goddamn wrong.");
  }
};
sayMyName("Heisenberg");

// We can also use the Ternary Operator: condition ? exprIfTrue : exprIfFalse
console.log(6 > 1 ? "True" : "False"); // Outputs: "True"

// Let's check the && (AND) and || (OR) operators

const myName = "Walter Jr.";
const work = "Breakfast";

if (myName === "Walter Jr." && work === "Breakfast") {
  console.log("This is Flynn."); // Both conditions must be true
}
if (myName === "Walter Jr." || work === "Lunch") {
  console.log("Open na noor"); // At least one condition must be true
}
