package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("Teste da calculadora")
public class CalculadoraTest {

  @DisplayName("1 - Teste para o método somar")
  @Test
  public void testSomar() {
    Calculadora calculadora = new Calculadora();
    assertEquals(34, calculadora.somar(32, 2));
  }

  @DisplayName("2 - Teste para o método subtrair")
  @Test
  public void testSubtrair() {
    Calculadora calculadora = new Calculadora();
    assertEquals(32, calculadora.subtrair(34, 2));
  }

  @DisplayName("3 - Teste para o método dividir")
  @Test
  public void testDividir() {
    Calculadora calculadora = new Calculadora();
    assertEquals(3, calculadora.dividir(6, 2));
  }

  @DisplayName("3.1 - Teste divisão por 0")
  @Test
  public void testDividirPorZero() {
    Calculadora calculadora = new Calculadora();
    assertThrows(ArithmeticException.class, () -> {
      calculadora.dividir(3, 0);
    });
  }
}
