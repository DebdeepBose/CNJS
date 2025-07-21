const weightIn = document.getElementById('Weight');
const heightIn = document.getElementById('Height');
const outputField = document.getElementById('Output');

document.querySelector('.Calc').addEventListener("click", () => {
  const weight = parseFloat(weightIn.value);
  const height = parseFloat(heightIn.value);

  if (weight > 0 && height > 0) {
    const BMI = weight / (height * height);
    outputField.value = BMI.toFixed(2); 
  } else {
    outputField.value = "Invalid input";
  }
});
