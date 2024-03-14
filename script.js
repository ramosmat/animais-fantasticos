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
