package com.controle_frota.core;

public class Carro extends Veiculo {

  public Carro(String placa, int anoFabricao) {
    super(placa, anoFabricao);
    this.setCombustivel("Flex");
  }

  @Override
  public void abastecer(String local, String motorista, double valor) {
    this.abastecimentos.add(
        String.format("Local: %s, Motorista: %s, valor: R$ %.2f",
            local, motorista, valor));
  }

}
