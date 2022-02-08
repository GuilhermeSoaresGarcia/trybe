/*1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

function verificarPalindromo(palavra) {
  let arvalap = '';
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    arvalap += palavra[i];
  }

  if (palavra === arvalap) {
    return true;
  } else {
    return false;
  }
}

console.log(verificarPalindromo('arara'));
console.log(verificarPalindromo('desenvolvimento'));
