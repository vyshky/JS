class MyList {
  listSelector;

  constructor(list) {
    this.listSelector = list;
  }

  clear() {
    this.listSelector.innerHTML = "";
  }

  add(todo) {
    // let arr = item.getElementsByTagName("TEXT"); // получает массив
    // if (arr[0].innerHTML) {
    //   this.listSelector.append(item);
    // }

    // console.log(item);
    // let str = item.querySelector("TEXT").innerHTML; // получает первый найденный селектор
    // if (str) {
    //   this.listSelector.appendChild(item);
    // }

    if (todo) {
      let element = document.createElement("li");     
      if(todo.done){
        element.className = "list-group-item2 highlight";
      }
      else{
        element.className = "list-group-item2";
      }
      element.innerHTML =
        "<delete>❌</delete><approve>✅</approve>" +
        "<text>" +
        todo.title +
        "</text>";
      element.dataset.id = todo.id;
      this.listSelector.append(element);
    }
  }

  highlight(e) {
    let classList = e.target.parentElement.classList;
    if (classList.contains("highlight")) {
      classList.remove("highlight");
    } else {
      classList.add("highlight");
    }
    // e.target.parentElement.style.background = "green";
  }
  delete(e) {
    e.target.parentElement.remove();
  }
}

export { MyList };
