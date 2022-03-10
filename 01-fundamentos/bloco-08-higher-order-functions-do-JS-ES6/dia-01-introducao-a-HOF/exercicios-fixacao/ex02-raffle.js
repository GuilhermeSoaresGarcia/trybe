// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o 
// número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string 
// (Ex: "Tente novamente" ou "Parabéns você ganhou").


// function checkLuckyNumber (){
//   sorteio(betNumber)
// }




const generateRandomNumber = () => randomNumber = Math.ceil(Math.random() * 5);

function raffle(betNumber, generateRandomNumber) {
  if (generateRandomNumber === betNumber) {
    return (`O número sorteado foi: ${randomNumber}! Parabéns, tu ganhou!`);
  } else {
    return (`O número sorteado foi: ${randomNumber}! Tu não ganha nem no par ou ímpar...`);
  }
}

console.log(raffle(1))
// console.log(raffle(2));