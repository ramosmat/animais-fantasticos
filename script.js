// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgs = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgs);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2animais = document.querySelector(".animais-descricao h2");
console.log(h2animais);

// Selecione o último p do site
const par = document.querySelectorAll("p");

console.log(par[par.length - 1]);

// Mostre no console cada parágrado do site
let paragrafos = document.getElementsByTagName("p");
let para = Array.from(paragrafos);

para.forEach((item) => {
  console.log(item);
});

// Mostre o texto dos parágrafos no console
para.forEach((item) => {
  console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll("img");

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs2.forEach(() => {
  console.log(i++);
});

imgs2.forEach(() => i++);

//Pegando item pelo id
const secao = document.querySelector("#animais");

secao.classList.add("teste");
secao.classList.remove("teste");
secao.classList.toggle("ativo");
secao.classList.replace("ativo", "banana");

console.log(secao.classList.contains("limao"));
console.log(secao.classList);

console.log(secao.attributes[1].value);

console.log(secao.getAttribute("id"));
console.log(secao.setAttribute("fruta", "limao"));
console.log(secao.hasAttribute("class"));
console.log(secao.removeAttribute("fruta"));

console.log(secao.attributes);

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll("#menu a");

itensMenu.forEach((item) => {
  item.classList.add("ativo");
});

console.log(itensMenu.classList);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item, index) => {
  item.classList.remove("ativo");
});

itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const imagens2 = document.querySelectorAll("img");

imagens2.forEach((item) => {
  console.log(item.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');

link.setAttribute("href", "https://github.com/ramosmat");

//Verificando propriedades de dimensão e distância
const section = document.querySelector("#animais ul");

console.log(section.clientHeight); // height + padding
console.log(section.offsetHeight); // height + padding + border
console.log(section.scrollHeight); // height total, mesmo dentro de scroll

console.log(section.clientWidth); // Width + padding
console.log(section.offsetWidth); // Width + padding + border
console.log(section.scrollWidth); // Width total, mesmo dentro de scroll

const foot = document.querySelector("footer");

// Distância entre o topo do elemento e o topo da página
console.log(foot.offsetTop);

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
console.log(foot.offsetLeft);

const primeiroh2 = document.querySelector("h2");

const rect = primeiroh2.getBoundingClientRect();

console.log(rect); //retorna o elemento com suas propriedades como height, width, distancias entre as paredes da pagina

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if (window.innerWidth < 600) {
  console.log("Tela menor que 600px");
}

// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImg = document.querySelector("img");
console.log(
  `A distância da primeira imagem até o topo da tela é ${primeiraImg.offsetTop}`
);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  let totalImgWidth = 0;
  imagens2.forEach((img) => {
    totalImgWidth += img.clientWidth;
  });
  console.log(`A soma da largura de todas as imagens é ${totalImgWidth}`);
}

window.onload = function () {
  somaImgs();
};

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
let linksDim;
itensMenu.forEach((item) => {
  linksDim = item.getBoundingClientRect();
  if (linksDim.width >= 48 && linksDim.height >= 48) {
    console.log(item.innerText, "Possui acessibilidade");
  } else {
    console.log(item.innerText, "Não possui acessibilidade");
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const small = window.matchMedia("(max-width: 720px)");
const menu = document.querySelector("#menu");

if (small.matches) {
  console.log("Tela menor que 720px");
  menu.classList.add("menu-mobile");
} else {
  console.log("Tela maior que 720px");
}
