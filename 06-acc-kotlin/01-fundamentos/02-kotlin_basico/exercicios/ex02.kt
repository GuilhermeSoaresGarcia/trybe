//Cada degrau de uma escada tem X de altura. Escreva um programa usando Kotlin que receba essa altura e a altura que uma
//pessoa deseja alcançar usando a escada, calcule e mostre quantos degraus ela deverá subir para atingir seu objetivo, sem
//se preocupar com a altura da pessoa. Todas as medidas fornecidas devem estar em metros.

fun main() {
    print("Digite a altura do degrau: ")
    var altDegrau = readln().toInt()
    print("Digite a altura que a pessoa deseja chegar: ")
    var altMax = readln().toInt()
    println("A pessoa deverá subir ${calcularDegraus(altDegrau, altMax)} degraus")
}

fun calcularDegraus(a: Int, b: Int): Double {
    return b.toDouble() / a.toDouble()
}