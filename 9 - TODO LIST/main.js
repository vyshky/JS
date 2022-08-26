import { MyList } from "./modules/myList.js";
import { MyForm } from "./modules/myForm.js";

let myList = new MyList(document.querySelector("#myList"));
let myForm = new MyForm(document.forms.myForm);

myForm.formSelector.addEventListener("submit", function (e) {
  e.preventDefault();
  let item = document.createElement("li");
  item.className = "list-group-item2";
  item.innerHTML =
    '<delete>❌</delete><approve>✅</approve>' +
    "<text>" +
    e.target.taskName.value
    "</text>";
  myList.addElement(item);
  myForm.clear();
});

document.querySelector("#clear").addEventListener("click", function () {
  myList.clear();
});

myList.listSelector.addEventListener("click", function (e) {  
  if (e.target.tagName === "APPROVE") {
    myList.highlight(e);
  } else if (e.target.tagName === "DELETE") {
    myList.delete(e);
  }
});