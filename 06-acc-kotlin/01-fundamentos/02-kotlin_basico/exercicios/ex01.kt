//Escreva um programa usando Kotlin que receba o salário de uma pessoa colaboradora,
// calcule e mostre o novo salário, sabendo-se que este sofreu um aumento de 25%

fun main() {
    print("Digite seu salario: ")
    var salario = readln().toDouble()
    print("Novo salário: ${calculaAumento(salario)}")
}

fun calculaAumento(salario: Double): Double {
    return salario * 1.25
}