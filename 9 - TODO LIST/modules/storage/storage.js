class Storage {
  x = 100;
  tasks = [];
  add(todo) {
    this.tasks.push(todo);
  }
  save() {
    localStorage.setItem("myTasks", JSON.stringify(this.tasks));
  }
  clear() {
    this.tasks.length = 0;
  }
  changeToDone(e) {
    let id = e.target.parentElement.dataset.id;
    for (const task of this.tasks) {
      if (task.id == id) {
        if (task.done) {
          task.done = false;
        } else {
          task.done = true;
        }
      }
    }
  }
}

export { Storage };
