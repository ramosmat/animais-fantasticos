function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  //Adicionando as classes nos elementos para que seja exibido apenas o texto referente ao animal selecionado
  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("block");
        item.classList.add("hidden");
      });

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
}

function initAccordionList() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].nextElementSibling.classList.toggle("block");
  accordionList[0].nextElementSibling.classList.toggle("hidden");

  function activeAccordion(event) {
    event.currentTarget.nextElementSibling.classList.toggle("block");
    event.currentTarget.nextElementSibling.classList.toggle("hidden");
    event.currentTarget.nextElementSibling.classList.add("animate-slideShow");
    event.currentTarget.classList.toggle("after:content-['⬎']");
    event.currentTarget.classList.toggle("after:content-['⬏']");
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

initTabNav();
initAccordionList();
