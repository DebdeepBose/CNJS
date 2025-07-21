// Let's talk about how to access text using DOM
// Suppose in an HTML file there is this:

// <h1> Hello <span style="display: none">World</span> </h1>

// There are 3 main ways to retrieve this text content:

// 1. innerText
// It returns the visible text of an element (respects CSS like display: none)

const text1 = document.querySelector("h1").innerText;
console.log(text1); // Output: "Hello"

// 2. textContent
// It returns all the text of an element (even hidden ones, ignores styling)

const text2 = document.querySelector("h1").textContent;
console.log(text2); // Output: "HelloWorld"

// 3. innerHTML
// It returns the HTML inside the element, including tags

const text3 = document.querySelector("h1").innerHTML;
console.log(text3); // Output: " Hello <span style="display: none">World</span> "

// Summary:
// - innerText → Only visible text
// - textContent → All text including hidden
// - innerHTML → Full HTML structure inside element
