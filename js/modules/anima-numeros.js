export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    //
    this.handleMutation = this.handleMutation.bind(this);
  }

  //recebe um elemento do DOM com numero em seu texto. Incrementa a partir de 0 até o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText;
    let start = 0;
    const incremento = Math.floor(total / 100);

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;

      if (start >= total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 50 * Math.random());
  }

  //ativa incrementar numero para cada numero selecionado do DOM
  animaNumeros() {
    this.numeros.forEach((numero) =>
      this.constructor.incrementarNumero(numero)
    );
  }

  //função que ocore quando a mutação ocorrer
  handleMutation(mutationParam) {
    if (mutationParam[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  //adiciona o MutationObserver para verificar quando a classe 'ativo' é adicionada ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
