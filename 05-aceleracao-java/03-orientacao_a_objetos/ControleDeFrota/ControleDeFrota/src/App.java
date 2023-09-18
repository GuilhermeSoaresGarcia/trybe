import com.controle_frota.core.*;


public class App {
    public static void main(String[] args) throws Exception {
        Carro c1 = new Carro("IHS2010", 1983);
        Caminhao c2 = new Caminhao("RZ-4120", 1960);

        c1.abastecer("Posto 1", "Antonio", 180);
        c1.abastecer("Posto 2", "Marcelo", 230);
        c1.abastecer("Posto 1", "Adriana", 200);

        c2.abastecer(null, "Antonio", 210);
        c2.abastecer(null, "Marcelo", 220);
        c2.abastecer(null, "Adriana", 310);

        c1.listaAbastecimentos();
        c2.listaAbastecimentos();


    }
}
