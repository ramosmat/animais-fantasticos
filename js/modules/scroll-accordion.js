export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  //iniciar função
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]); //Ativar primeiro item
      this.addAccordionEvent();
    }
    return this;
  }
}
