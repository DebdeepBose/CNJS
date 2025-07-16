/*

console.table() is a built-in method in JavaScript used to display data in a tabular format 
(rows and columns) in the browser's developer console.

"console" is a global object provided by the 
JavaScript runtime environment (like a web browser or Node.js).

"table" is a method (a function) that belongs to the console object.
It prints data to the developer console in the form of a neatly formatted table.

*/

//1st Method

const firstName = "Hillary"
const lastName = "Catalbury"
const userName = "autumnleaf234@gmail.com"
const passWord = "fallenGreensTurnedYellow26."
const phoneNumber = "67263-87271"

console.table([firstName,lastName,userName,passWord,phoneNumber]);

//2nd Method :

console.table([{name: "Henry", age: 32}, {name: "Bjorn", age: 45}]);



