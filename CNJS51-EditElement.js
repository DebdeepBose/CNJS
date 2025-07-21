let ul = document.querySelector('.lang');

// When we like to add elements or something we can create a function
const addLi = (nameOfLang) => {
    let newLi = document.createElement('li');
    newLi.innerHTML = `${nameOfLang}`; // Works but not optimal
    ul.appendChild(newLi);
}

// Now we can do it as many times as we want
addLi("C++");
addLi("Java");
addLi("TS");

// BUT, this method works yet there is a problem, every time we invoke the function
// JS has to traverse the whole tree and parse innerHTML
// So lets write a function to optimize this 

// Here's a better and faster version:
const betterAddLi = (nameOfLang) => {
    let newLi = document.createElement('li');          // just creates the <li> tag
    let text = document.createTextNode(nameOfLang);    // more efficient way to add text
    newLi.appendChild(text);                           // appends the text inside <li>
    ul.appendChild(newLi);                             // finally adds <li> to the <ul>
}

// Now lets call this
betterAddLi("Rust");
betterAddLi("Go");
betterAddLi("Python");


//Now lets learn how to edit
const thirdLang = document.querySelector("li:nth-child(3)");
thirdLang.innerHTML = "Ruby";

//Lets see how to remove
const lastLang = document.querySelector("li:last-Child");
lastLang.remove();
