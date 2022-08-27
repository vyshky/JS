import { MyList } from "./mylist/myList.js";
import { MyForm } from "./myform/myForm.js";
import { Storage } from "./storage/storage.js";

let myList = new MyList(document.querySelector("#myList"));
let myForm = new MyForm(document.forms.myForm);
let storage = new Storage();

document.addEventListener("DOMContentLoaded", function () {
  loadStorage();
});

myForm.formSelector.addEventListener("submit", function (e) {
  e.preventDefault();
  let taskName = e.target.taskName.value;
  let todo = {
    id: Date.now(),
    title: taskName,
    done: false,
  };
  myList.add(todo);
  storage.add(todo);
  storage.save();
  myForm.clear();
});

document.querySelector("#clear").addEventListener("click", function () {
  myList.clear();
  storage.clear();
  storage.save();
});

myList.listSelector.addEventListener("click", function (e) {
  if (e.target.tagName === "APPROVE") {
    myList.highlight(e);    
    storage.changeToDone(e);
    storage.save();
  } else if (e.target.tagName === "DELETE") {
    myList.delete(e);
    let id = e.target.parentElement.dataset.id;
    storage.tasks = storage.tasks.filter((index) => index.id != id);
    storage.save();
    console.log(storage.tasks); // TODO :: разобраться с удалением
  }
});

function loadStorage() {
  let taskJson = localStorage.getItem("myTasks");
  if (taskJson) {
    let myTasks = JSON.parse(taskJson);
    for (const item of myTasks) {
      myList.add(item);
      storage.tasks.push(item);
    }
  }
}
