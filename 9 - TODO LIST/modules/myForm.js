class MyForm {
  static stringEmpty = "";

  static addElementToList(element) {    
    element.addEventListener("submit", function (e) {     
      e.preventDefault(); // предотвращает вызов функции по дефолту

      let li = document.createElement("li");
      li.className = "list-group-item2";
      li.innerHTML =
        '<deleteIcon class="m-1">🤢</deleteIcon><approve class="m-1">✔</approve>' +
        "<text>" +
        element.taskName.value; +
        "</text>";

      MyForm.addToList(li);
      MyForm.clearTextBox(myForm.taskName);
    });
  }
 
  static addToList(item) {
    // 1 решение
    let arr = item.getElementsByTagName("TEXT");
    if (arr[0].innerHTML !== this.stringEmpty) {
      document.querySelector("#myList").append(item);
    }
  }

  static clearTextBox(element) {
    if (element.value) {
      element.value = this.stringEmpty;
    }
  }
}

export { MyForm };
// export default randomSquare;
