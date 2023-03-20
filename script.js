// Place holder for the numbers
let num1 = "";
let num2 = "";
// Sets up the numbers and buttons
const container = document.getElementById("container");
// Gets the numbers
const numbers = document.querySelectorAll(".number");
// Loops through the numbers and adds event listeners
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (num1 === "") {
            num1 = Number(event.target.innerText);
        } else {
            num2 = Number(event.target.innerText);
        }
        // Changes the innerHTML of the container to the numbers
     container.innerHTML = num1 + " " + num2;  
    });
});


// Get the input fields and buttons

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const result = document.getElementById("result");

// Add event listeners to the buttons
addBtn.addEventListener("click", function() {
  container.innerHTML = Number(num1) + Number(num2);
});

subtractBtn.addEventListener("click", function() {
  container.innerHTML = Number(num1) - Number(num2);
});

multiplyBtn.addEventListener("click", function() {
  container.innerHTML = Number(num1) * Number(num2);
});

divideBtn.addEventListener("click", function() {
  container.innerHTML = Number(num1) / Number(num2);
});