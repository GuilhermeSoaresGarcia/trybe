/*3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra. */

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';
let maisLetras = 0;

let menorPalavra = '';
let menosLetras = 0;

for (i = 0; i < array.length && array[i + 1] != undefined; i += 1) {
  if (array[i].length > array[i + 1].length && array[i].length > maisLetras) {
    maisLetras = array[i].length
    maiorPalavra = array[i]
  } else if (array[i].length < array[i + 1].length && array[i +1].length > maisLetras) {
    maisLetras = array[i + 1].length
    maiorPalavra = array[i + 1]
  }
}

for (i = 0; i < array.length && array[i + 1] != undefined; i += 1) {
  if (array[i].length < array[i + 1].length){
    menosLetras = array[i].length
    menorPalavra = array[i]
  } else if (array[i].length < menosLetras) {
    menosLetras = array[i].length  
  } else if (array[i].length > array[i + 1].length && array[i +1].length < menosLetras) {
    menosLetras = array[i + 1].length
    menorPalavra = array[i + 1]
  }
}

console.log(`A maior palavra do array é "${maiorPalavra}"`);
console.log(`A menor palavra do array é "${menorPalavra}"`);