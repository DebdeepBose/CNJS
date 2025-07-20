// Let's learn loops

// For loops
const arr = [1, 2, 3, 4, 5];
let n = arr.length;

for (let i = 0; i < n; i++) {
  console.log(arr[i]); // So yeah that prints it, same as other lang honestly
}

console.log(arr.join(" ")); // This prints it in a single line

for (let i = 0; i < n; i++) {
  if (i > 3) {
    break;
  }
  console.log(i + i);
}

// While Loops
const printNoice = (i) => {
  while (i < 5) {
    console.log("NOICE");
    i++;
  }
};
printNoice(1);
