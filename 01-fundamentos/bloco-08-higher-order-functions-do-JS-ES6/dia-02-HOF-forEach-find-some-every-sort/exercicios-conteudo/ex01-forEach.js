const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, indice) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  console.log(`Índice no array: ${indice}`)
};

// Use o método forEach chamando a callback showEmailList para apresentar os emails 
// Adicione seu código aqui

emailListInData.forEach(function (elemento, index) {
  showEmailList(elemento, index);
})

emailListInData.forEach((elemento, index) => {
  showEmailList(elemento, index);
})