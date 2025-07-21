let buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.innerText.toLowerCase();
    document.body.style.backgroundColor = color;
  });
});

let txtbtn = document.querySelector(".txt");

txtbtn.addEventListener("click", () => {
  let text = document.getElementById("textbox").value.toLowerCase();
  document.body.style.backgroundColor = `${text}`;
});
