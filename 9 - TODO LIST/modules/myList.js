class MyList {
  listSelector;

  constructor(list) {
    this.listSelector = list;
  }

  clear() {
    this.listSelector.innerHTML = "";
  }

  addElement(item) {
    // let arr = item.getElementsByTagName("TEXT"); // получает массив
    // if (arr[0].innerHTML) {
    //   this.listSelector.append(item);
    // }

    let str = item.querySelector("TEXT").innerHTML; // получает первый найденный селектор
    if (str) {
      this.listSelector.append(item);
    }
  }
  highlight(e) {
    let classList = event.target.parentElement.classList;
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
