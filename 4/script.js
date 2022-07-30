let km = prompt("введите километры");
let miles = +km / 1.609;

console.log(miles);

let box = document.querySelector("body .box");
box.innerHTML = miles.toFixed(2);