package com.trybe.acc.java;

import java.util.Scanner;

/**
 * Classe exibe o antecessor e o sucessor de um número.
 */

public class AntecessorSucessor {

  /**
  * O método coleta um número via terminal e exibe o seu antecessor e sucessor.
  */
  public static void main(String[] args) {
    // Ler a entrada de um número pelo console
    Scanner scan = new Scanner(System.in);

    System.out.println("Digite um número:");
    int numero = scan.nextInt();
    // Seu código aqui...
    int antecessor = numero - 1;
    int sucessor = numero + 1;
        
    // Imprime a saída no console. OBS: descomente a próxima linha
    System.out.println("O número " + numero + " tem " + antecessor + " como seu antecessor e " 
        + sucessor + " como seu sucessor.");

    scan.close();
  }

}
