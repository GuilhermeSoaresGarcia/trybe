const readline = require('readline-sync');
const operations = require('./operations');

const num1 = readline.questionInt('Digite um número inteiro: ');
const oper = readline.question('Digite uma operação matemática (+, -, *, /): ')
const num2 = readline.questionInt('Digite outro número inteiro: ');


switch (oper) {
  case '+':
    operations.sum(num1, num2);
    break;

  case '-':
    operations.sub(num1, num2);
    break;

  case '*':
    operations.mul(num1, num2);
    break;

  case '/':
    operations.div(num1, num2);
    break;

  default:
    console.log(`Operação não reconhecida.`);
};
