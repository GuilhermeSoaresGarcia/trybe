const readline = require('readline-sync');

let playAgain = true;

function compareNumbers(){
  const userNum = readline.questionInt('Digite um número entre 0 e 10: ');
  const randomNum = Math.floor(Math.random() * 11);
  if (userNum === randomNum) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNum}.`);
  }  
}

function play() {
  while (playAgain) {
    compareNumbers();
    playAgain = readline.keyInYNStrict('Deseja jogar novamente? ');
    console.log('');
  }
}

play();

module.exports = { play };