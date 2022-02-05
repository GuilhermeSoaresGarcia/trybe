/* Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let primos = [];
let contadorDeDivisores = 0;

for (let numeroAtual = 2; numeroAtual <= 50; numeroAtual += 1) {
  for (let divisor = 1; divisor <= 50 && divisor < numeroAtual; divisor += 1) {
    if (numeroAtual % divisor == 0 && divisor != 1 && divisor != numeroAtual) {
      contadorDeDivisores += 1;      
    }
  }
  if (contadorDeDivisores == 0) {
    primos.push(numeroAtual);
  }
  contadorDeDivisores = 0;
}

console.log(`O maior número primo entre 0 e 50 é: ${primos[primos.length-1]}`);



