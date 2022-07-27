const readline = require('readline-sync');

function veloMedia (){
  const dist = readline.questionInt('Insira a distância em metros: ');
  const tempo = readline.questionInt('Insira o tempo, em segundos, em que a distância foi percorrida: ');
  const resultado = dist / tempo;
  return resultado;
}

console.log(veloMedia());

module.exports = { veloMedia };