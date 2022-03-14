// Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const isEven = (number) => number % 2 === 0;

const filteredEvenNumbers = (array) => array.filter(isEven);

const sumFilteredNumbers = (array) => filteredEvenNumbers(array).reduce((acumulator, current) => acumulator + current);

console.log(sumFilteredNumbers(numbers));

// console.log(filteredEvenNumbers(numbers))
