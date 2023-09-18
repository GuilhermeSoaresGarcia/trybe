package com.controle_frota.core;

public class Moto extends Veiculo {

  public Moto(String placa, int anoFabricao) {
    super(placa, anoFabricao);
    this.setCombustivel("Gasolina");
  }

  @Override
  public void abastecer(String local, String motorista, double valor) {
    this.abastecimentos.add(
        String.format("Local: %s, Motorista: %s, valor: R$ %.2f",
            local, motorista, valor));
  }

}
