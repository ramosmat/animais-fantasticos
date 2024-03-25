const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

//   tabContent[0].classList.remove("hidden");

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
      item.classList.remove("block");
      item.classList.add("hidden");
    });
    tabContent[index].classList.add("ativo");
    tabContent[index].classList.add("block");
    tabContent[index].classList.add("animate-description");
    tabContent[index].classList.remove("hidden");
  }

  tabMenu.forEach((itemMenu, indexMenu) => {
    itemMenu.addEventListener("click", () => {
      activeTab(indexMenu);
    });
  });
}
