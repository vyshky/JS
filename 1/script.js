console.log("StartJS");

let number = parseInt(prompt("Введите число"));

let boxes = document.querySelectorAll(".box");

for (let i = 2; i < boxes.length + 2; ++i) {
  boxes[i - 2].innerHTML = `${number} ** ${i} = ${number ** i}`;
}

console.log("EndJS");
