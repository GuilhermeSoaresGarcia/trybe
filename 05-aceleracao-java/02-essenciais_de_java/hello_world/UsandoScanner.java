import java.util.Scanner;

public class UsandoScanner {
  public static void main(String[] args) {
    // Scanner scan = new Scanner(System.in);
    // Sem o .useDelimiter, como na linha acima, o sysout mostra apenas o primeiro termo antes de um espaço. 
    // Isso impossibilitaria o uso de um nome composto, por exemplo.
    Scanner scan = new Scanner(System.in).useDelimiter("\n"); // Instancia o scanner
    System.out.print("Digite algo: "); // Prompt para que o usuário digite algo
    String userInput = scan.next(); // Recebe o input
    System.out.println("Vc digitou: " + userInput);
    scan.close();
  }
}
