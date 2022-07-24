let width = prompt("введите длину квадрата");
let S = width * width; // Площадь

let box = document.querySelector(".box");
if (width < 130) { // изменяем размера квадрата , чтобы значение S влезло в квадрат
  width = 130;
}
box.style.width = width + "px";
box.style.height = width + "px";
box.style.backgroundColor = "red";
box.innerHTML = S;
