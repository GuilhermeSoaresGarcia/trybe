function sum(num1, num2) {
  return console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

function sub(num1, num2) {
  return console.log(`${num1} - ${num2} = ${num1 - num2}`);
};

function mul(num1, num2) {
  return console.log(`${num1} × ${num2} = ${num1 * num2}`);
};

function div(num1, num2) {
  return console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);
};

module.exports = {
  sum,
  sub,
  mul,
  div
};