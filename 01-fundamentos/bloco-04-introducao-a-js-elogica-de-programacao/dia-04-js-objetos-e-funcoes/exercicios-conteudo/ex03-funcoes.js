/* Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados */

let a = gerarNumeroAleatorio();
let b = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  numeroAleatorio = Math.random() * 10 + 1;
  return Math.floor(numeroAleatorio);
}

function somar(a, b) {
  let resultadoSoma = a + b;
  return resultadoSoma;
}

function subtrair(a, b) {
  let resultadoSubtracao = a - b;
  return resultadoSubtracao;
}

function multiplicar(a, b) {
  let resultadoMultiplicacao = a * b;
  return resultadoMultiplicacao;
}

function dividir(a, b) {
  let resultadoDivisao = a / b;
  return resultadoDivisao;
}

function restoDaDivisao(a, b) {
  let resultadoRestoDivisao = a % b;
  return resultadoRestoDivisao;
}

// Faça um programa que retorne o maior de dois números.Defina no começo do programa duas constantes com os valores que serão comparados.
function maiorNúmero(a, b) {
  if (a > b) {
    return a
  } else if (a < b) {
    return b
  } else {
    return 'números iguais'
  }
}

console.log(`Número A: ${a}, número B: ${b}`);
console.log(`Adição: ${somar(a, b)}`)
console.log(`Subtração: ${subtrair(a, b)}`)
console.log(`Multiplicação: ${multiplicar(a, b)}`)
console.log(`Dividir: ${dividir(a, b)}`)
console.log(`Resto da divisão: ${restoDaDivisao(a, b)}`)
console.log(`O maior número é: ${maiorNúmero(a,b)}`);
