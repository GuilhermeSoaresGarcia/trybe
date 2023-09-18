package com.controle_frota.core;

import java.util.ArrayList;

public abstract class Veiculo {
  private String placa;
  private int anoFabricao;
  private String combustivel;
  protected ArrayList<String> abastecimentos;

  public Veiculo(String placa, int anoFabricao) {
    this.placa = placa;
    this.anoFabricao = anoFabricao;
    this.abastecimentos = new ArrayList<>();
  }

  public abstract void abastecer(String local, String motorista, double valor);

  public void listaAbastecimentos(){
    System.out.println("+--- Lista de abastecimentos para o veiculo: " + this.placa + " ---+");
    for (String abastecimento : abastecimentos) {
      System.out.println("|" + abastecimento + "\t|");      
    }
    System.out.println("+------------------------- Fim -------------------------+");
  }

  public String getPlaca() {
    return placa;
  }

  public void setPlaca(String placa) {
    this.placa = placa;
  }

  public int getAnoFabricao() {
    return anoFabricao;
  }

  public void setAnoFabricao(int anoFabricao) {
    this.anoFabricao = anoFabricao;
  }

  public String getCombustivel() {
    return combustivel;
  }

  public void setCombustivel(String combustivel) {
    this.combustivel = combustivel;
  }

  
}
