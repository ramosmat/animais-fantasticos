import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuButton.classList.toggle("ativo");
      menuList.classList.toggle("ativo");
      outsideClick(menuList, eventos, () => {
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
