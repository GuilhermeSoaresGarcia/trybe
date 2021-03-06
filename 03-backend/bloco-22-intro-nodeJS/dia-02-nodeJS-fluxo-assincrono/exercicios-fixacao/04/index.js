const path = require('path');
const fs = require('fs').promises;

const fileNotParsedYet = path.resolve(__dirname, 'simpsons-94f8eb570f2ea830462ee2375ded177b.json');

// Você pode utilizar then/catch ou async/await para escrever seu código. Procure não utilizar callbacks.
// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

// async function simpsonsCharacters() {
//   const data = await fs.readFile(fileNotParsedYet, 'utf8');
//   const parsedData = JSON.parse(data);
//   const array = parsedData.map((item) => `${item.id} - ${item.name}`);
//   console.log(array);
// };

// simpsonsCharacters();

/*Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado.
Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".*/

async function singleCharacter(id) {
  const data = await fs.readFile(fileNotParsedYet, 'utf8');
  const parsedData = JSON.parse(data);
  const filteredCharacter = parsedData.filter(item => item.id === String(id));
  const promise = new Promise((resolve, reject) => {
    if (filteredCharacter.length === 0) reject('id não encontrado');

    resolve(filteredCharacter);
  })
  console.log(promise);
};

singleCharacter(0);

//Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
//Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
//Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
//Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
