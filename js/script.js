import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/scroll-accordion.js";
import initTabNav from "./modules/tab-nav.js";
// import * as modais from "./modules/modal.js";
import initModal from "./modules/modais.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
// import initAnimaNumeros from "./modules/anima-numeros.js";
import initFuncionamento from "./modules/date-funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
// initAnimaNumeros(); ESTÁ SENDO IMPORTADA NO initFetchAnimais
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
