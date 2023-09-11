import java.util.Scanner;
import java.time.Year;

public class UsandoScanner {
  public static void main(String[] args) {
    // Scanner scan = new Scanner(System.in);
    // Sem o .useDelimiter, como na linha acima, o sysout mostra apenas o primeiro termo antes de um espaço. 
    // Isso impossibilitaria o uso de um nome composto, por exemplo.
    Scanner scan = new Scanner(System.in).useDelimiter("\n"); // Instancia o scanner
    System.out.print("Digite seu nome: "); // Prompt para que o usuário digite algo
    String nome = scan.next(); // Recebe o input
    System.out.print("Digite seu peso: ");
    String peso = scan.next();
    System.out.print("Digite seu ano de nascimento: ");
    String nascimento = scan.next(); // Recebe input como string

    int currentYear = Year.now().getValue();
    int idade = currentYear - Integer.parseInt(nascimento); // Convertendo a variável "nascimento" para int a fim de calcular a idade

    System.out.println("Vc se chama " + nome + " pesa " + peso + "Kg e tem " + idade + " anos de idade!");
    scan.close();
  }
}
