window.onload = () => {
  const resposta = window.confirm("Quer carregar os scripts das aulas?");
  if (resposta == true) {
    this.alert(
      "Não se assuste com a bagunça, todo o script é voltado para o aprendizado!"
    );
    useScriptAulas();
  }
};

function useScriptAulas() {
  // Retorne no console todas as imagens do site
  const imagens = document.getElementsByTagName("img");
  console.log(imagens);

  // Retorne no console apenas as imagens que começaram com a palavra imagem
  const imgs = document.querySelectorAll('img[src^="img/imagem"]');
  console.log(imgs);

  // Selecione todos os links internos (onde o href começa com #)
  const linksInternos = document.querySelectorAll('[href^="#"]');
  console.log("linksInternos", linksInternos);

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
  const animais = document.querySelector("#animais");

  animais.classList.add("teste");
  animais.classList.remove("teste");
  animais.classList.toggle("ativo");
  animais.classList.replace("ativo", "banana");

  console.log(animais.classList.contains("limao"));
  console.log(animais.classList);

  console.log(animais.attributes[1].value);

  console.log(animais.getAttribute("id"));
  console.log(animais.setAttribute("fruta", "limao"));
  console.log(animais.hasAttribute("class"));
  console.log(animais.removeAttribute("fruta"));

  console.log(animais.attributes);

  // Adicione a classe ativo a todos os itens do menu
  const itensMenu = document.querySelectorAll("#menu a");

  itensMenu.forEach((item) => {
    item.classList.add("ativo");
  });

  console.log(itensMenu.classList);

  // Remova a classe ativo de todos os itens do menu e mantenha apenas no primeiro
  itensMenu.forEach((item, index) => {
    item.classList.remove("ativo");
  });

  // itensMenu[0].classList.add("ativo");

  // Verifique se as imagens possuem o atributo alt
  const imagens2 = document.querySelectorAll("img");

  imagens2.forEach((item) => {
    console.log(item.hasAttribute("alt"));
  });

  // Modifique o href do link externo no menu
  const linkDev = document.querySelector('#menu a[href^="http"]');

  linkDev.setAttribute("href", "https://github.com/ramosmat");

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

  //Adicionando eventos
  function clicou() {
    window.alert("Clicou");
  }

  imagens[0].addEventListener("click", clicou);

  //O primeiro parâmetro do callback é referente ao evento que ocorreu, esse evento possui varias
  // propriedades como o target e métodos como o preventDefault()
  function callback(event) {
    console.log(event);
    console.log(event.target);
  }

  imagens[1].addEventListener("click", callback);

  function handleLinkExterno(ev) {
    console.log(
      "Evento está funcionando:",
      ev,
      "Mas o preventDefault() impede que o link externo seja seguido"
    );
    ev.preventDefault();
  }

  const linksExternos = document.querySelectorAll(
    '.animais-descricao a[href^="http"]'
  );

  linksExternos[0].addEventListener("click", handleLinkExterno);

  // Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos
  // demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links
  function handleLinksInternos(event) {
    // const obj = event.currentTarget;
    event.preventDefault();
    linksInternos.forEach((item) => {
      item.classList.remove("ativo");
    });
    event.currentTarget.classList.add("ativo");
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", handleLinksInternos);
  });

  // Selecione todos os elementos do site começando a partir do body,
  // ao clique mostre exatamente quais elementos estão sendo clicados
  const bodyElements = document.querySelectorAll("body *");

  bodyElements.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event.currentTarget);
    });
  });

  // Utilizando o código anterior, ao invés de mostrar no console,
  // remova o elemento que está sendo clicado, o método remove() remove um elemento
  const bodyElements2 = document.querySelectorAll("body *");

  // bodyElements2.forEach((item) => {
  //   item.addEventListener("click", (event) => {
  //     event.currentTarget.remove();
  //   });
  // });

  // Se o usuário clicar na tecla (t), aumente todo o texto do site.
  function handleKeyboard(ev) {
    console.log(ev.key);
    if (ev.key == "t") {
      document.documentElement.classList.toggle("text-6xl");
    }
  }

  window.addEventListener("keydown", handleKeyboard);

  //ESTUDOS TRAVERSING E MANIPULAÇÃO
  menu.outerHTML; // todo o html do elemento
  menu.innerHTML; // html interno
  menu.innerText; // texto, sem tags

  // menu.innerText = "<p>Texto</p>"; // a tag vai como texto
  // menu.innerHTML = "<p>Texto</p>"; // a tag é renderizada

  const lista = document.querySelector("#animais-lista");

  lista.parentElement; // pai
  lista.parentElement.parentElement; // pai do pai
  lista.previousElementSibling; // elemento irmão acima
  lista.nextElementSibling; // elemento irmão abaixo

  lista.children; // HTMLCollection com os filhos
  lista.children[0]; // primeiro filho
  lista.children[--lista.children.length]; // último filho

  lista.querySelectorAll("li"); // todas as LI's
  lista.querySelector("li:last-child"); // último filho

  //Existe também as propriedades parecidas com as acima, mas para acessar Nodes

  lista.previousElementSibling; // elemento acima
  lista.previousSibling; // node acima

  lista.firstChild; // primeiro node child
  lista.childNodes; // todos os node child

  //MANIPULANDO OS ELEMENTOS
  const contato = document.querySelector("#contato");
  const titulo = contato.querySelector("h1");

  // contato.appendChild(lista); // move lista para o final de contato
  // contato.insertBefore(lista, titulo); // insere a lista antes de titulo
  // contato.removeChild(titulo); // remove titulo de contato
  // contato.replaceChild(lista, titulo); // substitui titulo por lista

  console.log(titulo.innerHTML);

  //NOVOS ELEMENTOS

  const novoH1 = document.createElement("h1");
  novoH1.innerText = "Novo Título";
  novoH1.classList.add("titulo");

  animais.parentElement.insertBefore(novoH1, animais);

  //CLONAR ELEMENTOS
  // titulo, titulo2 e novoTitulo são iguais, ou seja, modificar um modifica os outros, pois todos sao o mesmo elemento

  const titulo2 = document.querySelector("h1");
  const novoTitulo = titulo;

  //Clonando:
  const cloneTitulo = titulo.cloneNode(true); //o true faz com que clone também os filhos do elemento titulo
  contato.appendChild(cloneTitulo);

  //EXERCICIOS
  // Duplique o menu e adicione ele em copy
  const cloneMenu = menu.cloneNode(true);
  foot.appendChild(cloneMenu);

  // Selecione o primeiro DT da dl de Faq
  const faqDL = document.querySelector("#faq dl");
  console.log("Primeiro <dt> do <dl> de FAQ", faqDL.children[0]);

  // Selecione o DD referente ao primeiro DT
  console.log(
    "<dd> referente ao <dt> de FAQ",
    faqDL.children[0].nextElementSibling
  );

  // Substitua o conteúdo html de .faq pelo de .animais
  faq.innerHTML = animais.innerHTML;
}
