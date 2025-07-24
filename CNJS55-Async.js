// Let's learn about Web APIs

// setTimeout, console.log, DOM APIs, localStorage, etc. these are not part of JavaScript itself
// Yes, it may come as a surprise!
// These features are provided by the browser (or the environment like Node.js)
// JavaScript runs inside the browser, and the browser gives extra powers via Web APIs
// These APIs are written in C++ or other low-level languages
// and exposed to JavaScript so we can use them

// Example:
// - setTimeout comes from Timer API
// - console.log comes from Console API
// - document.querySelector comes from DOM API
// - localStorage comes from Storage API

// JavaScript just knows how to interact with these through function calls


// Event loop has one job: it continuously monitors the Call Stack and the Task Queue
// If it sees the Call Stack is EMPTY, and there is something in the Task Queue,
// it pushes that callback function into the Call Stack for execution
// That's how async code like setTimeout, fetch, eventListeners work non-blockingly in JS


// Let's learn how fetch() works

// fetch() is a Web API (not a part of JS), used to make HTTP requests
// It returns a Promise (means it’s asynchronous)
// Behind the scenes, fetch sends a network request → gets response → resolves the promise

// Basic example:
fetch('https://api.example.com/data') // <-- This makes the request
  .then(function(response) {
    // .then() waits for the response to come back
    // response is a stream, we need to convert it to actual JSON
    return response.json(); // <-- returns another Promise
  })
  .then(function(data) {
    // Now we finally have the actual data
    console.log(data); // Do whatever with the data
  })
  .catch(function(error) {
    // This catches any error in the fetch or parsing process
    console.log("Fetch failed:", error);
  });

// Behind the scenes:
// 1. fetch() sends request → browser puts it in Web APIs
// 2. Once response comes → it’s pushed into the Microtask Queue (because of Promise)
// 3. Event loop checks if call stack is empty → pushes the .then() callback into the call stack