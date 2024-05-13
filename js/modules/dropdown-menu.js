import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.activeClass = "ativo";

    //define click e touchstart como argumento padrao de eventos do usuário
    if (events === undefined) {
      this.events = ["click", "touchstart"];
    } else {
      this.events = events;
    }

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdownMenu e adiciona a função que observa o clique fora dele
  activeDropdownMenu(ev) {
    ev.preventDefault();
    const element = ev.currentTarget;
    element.classList.add(activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(activeClass);
    });
  }

  //adiciona os eventos ao dropdownMenu
  addDropdownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvents();
    }
    return this;
  }
}
