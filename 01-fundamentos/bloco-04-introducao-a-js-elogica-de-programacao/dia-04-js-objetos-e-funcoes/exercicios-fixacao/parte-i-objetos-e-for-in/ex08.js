//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos". 

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
 
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor:'JK Rowling', editora:'Rocco'});
leitor.livrosFavoritos.push({titulo: '1984', autor:'George Orwell', editora:'Nova Fronteira'});

console.log(`${leitor.nome} tem ${leitor.livrosFavoritos.length} livro(s) favorito(s).`);
console.log();
console.log(leitor);