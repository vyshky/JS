console.log("StartJS");

let firstNumber = parseInt(prompt("Введите число 1"));
let secondNumber = parseInt(prompt("Введите число 2"));

let box = document.querySelector(".box");

box.innerHTML = `(${firstNumber}+${secondNumber}) / 2=${(firstNumber + secondNumber )/2}`;

console.log("EndJS");