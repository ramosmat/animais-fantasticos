export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
      }, 50);
    });
  }

  function handleMutation(mutationParam) {
    if (mutationParam[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
}
