import ScrollSuave from "./modules/scroll-suave.js";
import ScrollAnima from "./modules/scroll-animacao.js";
import Accordion from "./modules/scroll-accordion.js";
import TabNav from "./modules/tab-nav.js";
// import * as modais from "./modules/modal.js";
import Modal from "./modules/modais.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
// import initAnimaNumeros from "./modules/anima-numeros.js"; //importada na fetchAnimais
import initFuncionamento from "./modules/date-funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  ".modal-container"
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu("[data-dropdown]");
dropdownMenu.init();

initMenuMobile();
initFuncionamento();

fetchAnimais("../../animais-api.json", ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
