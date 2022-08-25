class MyList {
  static clearList(btn, list) {
    btn.addEventListener("click", function () {
      list.innerHTML = "";
    });
  }
}
export { MyList };