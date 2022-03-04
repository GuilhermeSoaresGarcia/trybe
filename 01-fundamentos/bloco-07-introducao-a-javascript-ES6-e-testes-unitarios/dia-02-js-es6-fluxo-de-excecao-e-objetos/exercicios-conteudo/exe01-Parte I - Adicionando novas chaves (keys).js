function person(nome) {
  {
    this.nome = nome
  }
}

console.log(new person('guilherme'));



// Arrow function não pode ser usado como constructor, só função normal. Dá o erro abaixo:
const anotherPerson = (nome) => {
  { 
    this.nome = nome 
  }
}

console.log(new anotherPerson('marina'));
