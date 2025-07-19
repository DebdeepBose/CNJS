// Lets talk about Date

let d = new Date();
console.log(d); // Gives current date & time, kinda readable now but still chunky

// Earlier we had to do this to make it a bit nicer
console.log(d.toString()); // Gives a cleaner string version of the date

// Now if we just need the date, like just the date no other info we can do this
console.log(d.toDateString()); // Gives Sat Jul 19 2025

// Now the next one gives date with DD/MM/YYYY format and the time with am/pm
console.log(d.toLocaleString()); // 19/7/2025, 9:23:01 pm

// If we do toLocaleDateString, then it just gives the date in DD/MM/YYYY format, that's all
console.log(d.toLocaleDateString()); //  19/7/2025

// And if we just want the time in a readable way
console.log(d.toLocaleTimeString()); //  9:23:01 pm

// Want just the year? Sure
console.log(d.getFullYear()); // Prints 2025

// And month? Remember Jan is 0, Dec is 11 (Like who designed this XD)
console.log(d.getMonth()); // 6 → July

// For the exact date (day of the month)
console.log(d.getDate()); // 19

// And for day of the week, again 0 is Sunday (Imagine waking up on a day 0)
console.log(d.getDay()); //  6 → Saturday

// OH BTW, we can create dates as well since Date is an object [Yeah try typeof date]
let date1 = new Date(2021, 0, 12); // Once again 0 is January , also YYYY/MM/DD format cuz M'urica
console.log(date1.toDateString()); // Prints Tue Jan 12 2021

// We can also create dates using a string
let date2 = new Date("2022-08-15"); // ISO format : YYYY-MM-DD
console.log(date2.toDateString()); // Prints Mon Aug 15 2022

// Very important for interviews

let timeUntilNow = Date.now(); // Date.now() returns the number of milliseconds passed since Jan 1, 1970
console.log(timeUntilNow); // Prints a large number representing time in milliseconds

/*
Now, you can totally go ahead and make it in second,minutes, hours function if u want
then apply it accordingly
*/

const toSec = () => {
  let x = parseInt(timeUntilNow / 1000);
  return x;
};
const toMin = () => {
  let x = parseInt(timeUntilNow / 60000);
  return x;
};
const toHour = () => {
  let x = parseInt(timeUntilNow / 3600000);
  return x;
};
const toDays = () => {
  let x = parseInt(timeUntilNow / 3600000 / 24);
  return x;
};
const toWeeks = () => {
  let x = parseInt(timeUntilNow / 3600000 / 24 / 7);
  return x;
};

console.log("Time in Seconds: " + toSec());
console.log("Time in Minutes: " + toMin());
console.log("Time in Hours: " + toHour());
console.log("Time in Days: " + toDays());
console.log("Time in Weeks: " + toWeeks());
