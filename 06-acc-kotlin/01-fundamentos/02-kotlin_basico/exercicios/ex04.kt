//Escrevas um programa em Kotlin que receba três notas de uma pessoa estudante e mostre a média aritmética e a mensagem
// de acordo com as regras a seguir:
//
//Média aritmética igual ou maior que 0.0 e menor do que 3.0, exibir a mensagem REPROVADO
//Média aritmética igual ou maior que 3.0 e menor do que 7.0, exibir a mensagem EXAME
//Média aritmética igual ou maior que 7.0 e menor do que 10.0, exibir a mensagem APROVADO


fun main() {
    print("Digite a primeira nota: ")
    var nota1 = readln().toDouble()
    print("Digite a segunda nota: ")
    var nota2 = readln().toDouble()
    print("Digite a terceira nota: ")
    var nota3 = readln().toDouble()
    var media = calcularMedia(nota1, nota2, nota3)

    if (media >= 7.0) println("Nota: ${media}\nAPROVADO")
    else if (media >= 3) println("Nota: ${media}\nEXAME")
    else println("Nota: ${media}\nREPROVADO")
}

fun calcularMedia(nota1: Double, nota2: Double, nota3: Double): Double {
    return (nota1 + nota2 + nota3) / 3
}