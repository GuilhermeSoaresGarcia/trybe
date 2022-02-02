/* Math.random: gera números pseudo-aleatórios entre 1 e 100. Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Para cortar as casas decimais: X.toFixed(). Fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */
const nota = (Math.random() * (100 - 1) + 1).toFixed();

console.log("Nota: " + nota)

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!")
} else if (nota < 60) {
  console.log("Você foi reprovada(o)")
} else {
  console.log("Você está na nossa lista de espera")
}

