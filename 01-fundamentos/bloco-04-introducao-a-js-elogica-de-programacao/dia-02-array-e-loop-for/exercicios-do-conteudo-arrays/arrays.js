let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no FIM da lista
tasksList.unshift('Fazer exercícios da Trybe 2');  // adiciona mais uma tarefa no COMEÇO da lista

console.log(tasksList);

tasksList.pop(); // remove o ÚLTIMO item da lista
tasksList.shift(); // remove o PRIMEIRO item da lista

console.log(tasksList);

let indexOfTask = tasksList.indexOf('Reunião'); // localiza dentro do array o número do índice a partir do termo buscado 

console.log(indexOfTask);