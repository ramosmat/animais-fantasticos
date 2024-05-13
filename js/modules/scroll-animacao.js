import debounce from "./debouce.js";

export default class ScrollAnima {
  constructor(secoes) {
    this.sections = document.querySelectorAll(secoes);
    this.windowMetade = window.innerHeight * 0.6;

    this.checkdistance = debounce(this.checkdistance.bind(this), 200);
  }

  //pega a distancia de cada item em relação ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  //verifica a distancia em cada objeto em relação ao scroll do site
  checkdistance() {
    this.distance.forEach((item) => {
      if (window.scrollY > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkdistance();
      window.addEventListener("scroll", this.checkdistance);
    }
    return this;
  }

  //remove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkdistance);
  }
}
