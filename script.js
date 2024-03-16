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
