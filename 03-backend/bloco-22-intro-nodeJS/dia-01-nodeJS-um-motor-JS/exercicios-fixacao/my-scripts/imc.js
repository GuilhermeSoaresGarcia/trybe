const readline = require('readline-sync');

function imc() {
  const peso = readline.questionFloat('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');
  const calculaIMC = (peso / Math.pow(altura, 2)).toFixed(2);

  if (calculaIMC < 18.5) {
    return `IMC de ${calculaIMC}: abaixo do peso (magreza)`
  } else if (calculaIMC <= 24.9) {
    return `IMC de ${calculaIMC}: Peso normal`
  } else if (calculaIMC <= 29.9) {
    return `IMC de ${calculaIMC}: Acima do peso (sobrepeso)`
  } else if (calculaIMC <= 34.9) {
    return `IMC de ${calculaIMC}: Obesidade grau I`
  } else if (calculaIMC <= 39.9) {
    return `IMC de ${calculaIMC}: Obesidade grau II`
  } else {
    return `IMC de ${calculaIMC}: Obesidade graus III e IV`
  }
};

console.log(imc());

module.exports = { imc };