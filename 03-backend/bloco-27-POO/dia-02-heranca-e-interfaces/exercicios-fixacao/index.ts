import Person from "./ex01";

const person1 = new Person('Guilherme', new Date('27/12/1984'));

person1.name = 'Gui'; // uso do setter pra atribuir o novo nome
person1.birthDate = new Date('1984/12/27');
const data = person1.birthDate;

console.log(new Date().getTime())
console.log(person1.name)
console.log(person1.birthDate.toLocaleDateString())