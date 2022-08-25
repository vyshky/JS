let stringEmpty = "";
document.forms.myForm.addEventListener("submit", function (e) {
  e.preventDefault(); // предотвращает вызов функции по дефолту

  let taskText = document.forms.myForm.taskName.value;
  let li = document.createElement("li");
  li.className = "list-group-item2";
  li.innerHTML =
    '<deleteIcon class="m-1">🤢</deleteIcon><approve class="m-1">✔</approve>' +
    "<text>" +
    taskText +
    "</text>";
  addToList(li);
  clearElement(document.forms.myForm.taskName);
});

function addToList(element) {
  // 1 решение
  let arr = element.getElementsByTagName('TEXT');
  if(arr[0].innerHTML !== stringEmpty){
    document.querySelector("#myList").append(element);
  }
  // Тоже самое 2 решение
  //   let arr = element.children;
  //   for (let i = 0; i < arr.length; i++) {
  //     if(arr[i].tagName === 'TEXT' && arr[i].innerHTML !== stringEmpty)
  //       {
  //           document.querySelector("#myList").append(element);
  //       }
  //   }
}

function clearElement(element) {
  if (element.value) {
    element.value = stringEmpty; // очистить textBox
  }
}
