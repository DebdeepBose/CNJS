//OK we are mostly done with the heavy theory part, let's move to DOM!
//DOM stands for Document Object Model

//Basically, JavaScript sees the HTML like a big tree of objects
//And we can grab, change, add, or remove stuff from that tree.

//We can target HTML elements using methods like getElementById, querySelector etc.

//Example time ↓

//Grab the heading with id="Big" and store it in 'text'
const text = document.getElementById("Big");

//Grab the button with id="btn" and store it in 'btn1'
let btn1 = document.getElementById("btn");

//Now add a click event to the button → when clicked, change heading color
btn1.addEventListener("click", () => {
  text.style.color = "red"; //Changes the text color to red
});

//Lets Learn About .querySelector()
// .querySelector() is used to select the first matching element from the DOM using a CSS selector.
// Example: document.querySelector("h1") → selects the first <h1> on the page.

// .querySelectorAll() selects ALL matching elements and returns a NodeList (like an array, but not exactly).
// Example: document.querySelectorAll("h1") → selects all <h1> elements on the page.

// You can loop over the result of querySelectorAll using for...of, or convert it to an array if needed.
