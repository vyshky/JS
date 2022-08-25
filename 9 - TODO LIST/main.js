import { MyList } from "./modules/myList.js";
import { MyForm } from "./modules/myForm.js";


let myFormSelector = document.forms.myForm;
MyForm.addElementToList(myFormSelector);


let buttonSelector = document.querySelector("#clear");
let selectList = document.querySelector("#myList");
MyList.clearList(buttonSelector,selectList);
