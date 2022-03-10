const sum = (value1, value2) => value1 + value2;

const sub = (param1, param2) => param1 - param2;

function calculator(callback, value1, value2) {
 return callback(value1, value2); 
}

console.log(calculator(sum, 1, 2))