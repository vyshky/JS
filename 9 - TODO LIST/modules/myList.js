class MyList {
  stringEmpty = "";
  listSelector;

  constructor(list) {
    this.listSelector = list;
  }

  clear() {
    this.listSelector.innerHTML = "";
  }

  addElement(item) {
    let arr = item.getElementsByTagName("TEXT");
    if (arr[0].innerHTML !== this.stringEmpty) {
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