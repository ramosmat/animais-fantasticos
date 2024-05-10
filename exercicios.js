const agora = new Date();
agora;
// Semana Mês Dia Ano HH:MM:SS GMT
agora.getDate(); // Dia
agora.getDay(); // Dia da Semana ex: 5 = Fri
agora.getMonth(); // Número dia mês
agora.getFullYear(); // Ano
agora.getHours(); // Hora
agora.getMinutes(); // Minutos
agora.getTime(); // ms desde 1970
agora.getUTCHours() - 3; // Brasília

//Também podemos passar datas futuras:
const futuro = new Date("Dec 25 2024");
console.log(futuro);

//Transformando milisegundos em dias:
function transformaEmDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000);
}

console.log(transformaEmDias(agora.getTime()));
console.log(transformaEmDias(futuro.getTime()));

const hoje = new Date("Apr 17 2024");

console.log(
  `Faltam ${Math.floor(
    transformaEmDias(futuro.getTime() - hoje.getTime())
  )} dias para o natal de 2024`
);
