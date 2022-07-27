const readline = require('readline-sync');
const question = readline.question('Qual dos scripts que foram criados anteriormente deve ser executado?');

const { imc } = require('./imc');
const { veloMedia } = require('./velocidade');
const { play } = require('./sorteio');

switch (question) {
  case '1':
    imc();
    break;
  case '2':
    veloMedia();
    break;
  case '3':
    play();
    break;
  default:
    console.log('Alternativa inválida');
}