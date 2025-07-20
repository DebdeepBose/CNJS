// Let's discuss how we can declare an object with the help of a constructor
// Basically singleton objects

const bayHarbor = new Object();

bayHarbor.name = "Doakes";
bayHarbor.passion = "Angel";
bayHarbor.japanese = "Masuka";

console.log(bayHarbor); // As we can see, the output displays the object
console.log(`I can't belive ${bayHarbor.name} was the bay harbor butcher.`);

// Now let's check out object within object
const morgan = new Object();

morgan.name = { first: "Dexter", second: "Debra", third: "Harry" }; // This is how
morgan.enemies = { first: "Brian", second: "Lila" }; // we insert objects in objects

console.log(
  morgan.name.first + " & " + morgan.enemies.first + " are brothers."
); // Same old dot notation

// Now just like arrays, we can combine objects as well
const series = Object.assign(bayHarbor, morgan);
console.log(series); // This works fine, but there's something we can do differently

const series2 = Object.assign({}, bayHarbor, morgan); // Yes, a {} is added because
console.log(series2); // it creates a new object instead of modifying bayHarbor

// Or we can use our good o'l friend [...]

const paramount = { ...bayHarbor, ...morgan };
console.log(paramount); //Works fine

// We can also access keys and values of an object
console.log(Object.keys(paramount));
console.log(Object.values(paramount));

// In the future, we'll work with databases where objects are often stored in arrays
// So let's see how to access those

let objArr = [
  {
    series: "Dexter",
    mc: "Dexter",
    antag: "Trinity",
  },
  {
    series: "Fixing Good",
    mc: "Dalter Black",
    antag: "Asac Schradder",
  },
  {
    series: "Better Fuel Huell",
    mc: "Huell",
    antag: "Ted",
  },
];

// Say we want to see who the main character (mc) of "Better Fuel Huell" is
console.log(objArr[2].mc); // Combination of [] and dot notation

