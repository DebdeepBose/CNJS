//Ok so why Filter? Can't we use For-Each?
//So for-each has a problem that it cant return anything, returns undefined
//So in future, we might require operations that needs us to return stuff

//In comes Filter,
//Filter likes conditions, and those values that satisfy those conditions, filter would return those
const TBBT = [
  "Sheldon",
  "Amy",
  "Leonard",
  "Penny",
  "Howard",
  "Bernadette",
  "Raj",
];

//Now let's try to filter out names that have the letter 'a' in them
const filteredNames = TBBT.filter((name) => name.toLowerCase().includes("a"));
console.log(filteredNames); //Prints: [ 'Amy', 'Leonard', 'Howard', 'Bernadette', 'Raj' ]

//So yeah – Filter is cool when you want to return stuff based on a condition
//One more thing – we can totally use "return" keyword and multiple conditions

let randomNums = [1, 4, 3, 2, 5, 6, 9, 11, 21, 15];
//Now I want only those numbers which are less than 20 but greater than 5
//So we can do this:

const conditionNums = randomNums.filter((num) => {
  //Yeah we are using {} for explicit returns
  return num > 5 && num < 20;
});

console.log(conditionNums); //Prints [6, 9, 11, 15] → because these are > 5 and < 20

// Ofc we can physically write if-else statements as well

let isItEven = randomNums.filter((nums) => {
  if (nums % 2 === 0) {
    return true; // Yeah stores all even numbers in isItEven variable
  } else {
    return false;
  }
});

isItEven.sort(); // I sorted because I can lol
console.log(isItEven); // Prints [2,4,6] (if those were the even numbers in randomNums)

//Finally lets check a big array with multi objects
const bbCharacters = [
  { name: "Walter White", age: 52, netWorth: 80 },
  { name: "Jesse Pinkman", age: 26, netWorth: 5 },
  { name: "Saul Goodman", age: 45, netWorth: 12 },
  { name: "Gus Fring", age: 49, netWorth: 75 },
  { name: "Hank Schrader", age: 43, netWorth: 1 },
];

const charac = bbCharacters.filter(
  (characters) => characters.age > 40 && characters.age < 50
); //Yes we used the dot operator
console.log(charac); //Gives those objects as needed
