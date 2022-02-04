let listaDeNomes = ['Joana', 'Maria', 'Lucas'];
listaDeNomes.push('Guilherme');
listaDeNomes.push('Beatriz');
listaDeNomes.push('Mateus');
listaDeNomes.push('Ana Paula');
listaDeNomes.sort();

for (let index = 0; index < listaDeNomes.length; index++) {
  let mensagem = 'Boas vindas, ' + listaDeNomes[index] + '!';
  console.log(mensagem);
}