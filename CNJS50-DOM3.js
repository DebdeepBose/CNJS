const parent = document.querySelector('.parent');
console.log(parent);
console.log(parent.children); //helps to get the collection

//Lets say i wanna acess 2nd element
console.log(parent.children[1].innerHTML);

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

//Oh btw we can also create elements

const div = document.createElement('div');  // Create a <div>
console.log(div);

div.className = "Main"
div.id = "MainDiv"
div.setAttribute("id","newId")

const h1 = document.createElement('h1');    // Create an <h1>
h1.innerHTML = "Hello";                     // Add text inside it

div.appendChild(h1);                        // Append <h1> inside the <div>

document.body.appendChild(div);             // Finally, add the whole div to the body


