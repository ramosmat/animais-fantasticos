//Adicionando comportamento de deixar a o texto dos animais escondidao, quando clicado na imagem, o texto do animal é exibido
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

//Adicionando comportamento de deixar a descrição escondida, quando clicado no tópico, a descrição é exibida
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

//Adicionando comportamento de scroll suave para links internos
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(ev) {
    ev.preventDefault();
    const href = ev.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop;

    // Forma 1
    // section.scrollIntoView({ behavior: "smooth" });

    // Forma 2
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initTabNav();
initAccordionList();
initScrollSuave();
