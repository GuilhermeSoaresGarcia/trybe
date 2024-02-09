//Escrevas um programa em Kotlin que receba dois números e mostre o maior.

fun main() {
    print("Digite o primeiro numero: ")
    var a = readln().toInt()
    print("Digite o segundo numero: ")
    var b = readln().toInt()
    calcularMaior(a, b)
}

fun calcularMaior(a: Int, b: Int) =
    if (a > b) print("O primeiro número, ${a}, é maior que o segundo, ${b}")
    else if (a == b) print("${a} e ${b} são iguais!")
    else print("O segundo número, ${b}, é maior que o primeiro, ${a}")
