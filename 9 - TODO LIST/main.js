import { MyList } from "./modules/myList.js";
import { MyForm } from "./modules/myForm.js";

let myList = new MyList(document.querySelector("#myList"));
let myForm = new MyForm(document.forms.myForm);

document.forms.myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let item = document.createElement("li");
  item.className = "list-group-item2";
  item.innerHTML =
    '<delete>🤢</delete><approve>✔</approve>' +
    "<text>" +
    document.forms.myForm.taskName.value +
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

// let arrDel = document.querySelector(".delete");
// console.log(arrDel);

// arrDel.array.forEach(element => {
//     element.addEventListener("click",function(e){
//         console.log(e.target);
//     });
// });

// document.querySelector(".highlight").addEventListener()

// MyForm.addElementToList(myFormSelector,listSelector);
// MyList.clearList(clearSelector,listSelector);
