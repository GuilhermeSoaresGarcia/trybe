function novoFuncionario(nomeCompleto) {
  const email = `${nomeCompleto.replace(/ /g, '_').toLowerCase()}@trybe.com`;
  const person = {
    nomeCompleto,
    email
  }
  return person;
}

const newEmployees = () => {
  const employees = {
    id1: novoFuncionario('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: novoFuncionario('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: novoFuncionario('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());