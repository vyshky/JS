class MyForm {
  stringEmpty = "";
  formSelector;

  constructor(form){
    this.formSelector = form;
  }

  clear() {   
      this.formSelector.reset();
      // this.formSelector.taskName.value = this.stringEmpty;   
  }
}

export { MyForm };