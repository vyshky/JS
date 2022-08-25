import { MyList } from "./modules/myList.js";
import { MyForm } from "./modules/myForm.js";

let myFormSelector = document.forms.myForm;
let listSelector = document.querySelector("#myList");
let clearSelector = document.querySelector("#clear");


MyForm.addElementToList(myFormSelector,listSelector);
MyList.clearList(clearSelector,listSelector);