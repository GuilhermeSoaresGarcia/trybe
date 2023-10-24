package com.podccast.Podcast.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/podcasts")
public class Controller {

  @GetMapping
  public String getRoot() {
    return "Resposta podcast!";
  }

  @GetMapping("/{id}")
  public String getPodcast(@PathVariable Integer id) { // @PathVariable: essa anotação, utilizada no parâmetro do
                                                       // método, indica que o valor daquele parâmetro deve ser mapeado
                                                       // automaticamente, a partir da variável de caminho que tenha o
                                                       // mesmo nome do parâmetro (no caso, id).
    return "Vc pediu o podcast nº: " + id;
  }

  @GetMapping("/search")
  public String getSearch(@RequestParam String termo) { // Definimos um caminho extra para a rota (/search), mas não
                                                        // incluímos nenhum parâmetro no próprio caminho. Em vez disso,
                                                        // o que fizemos foi definir o parâmetro do método como um
                                                        // @RequestParam. Essa anotação vai fazer automaticamente o
                                                        // mapeamento entre parâmetros da URL e parâmetros do método com
                                                        // o mesmo nome (no caso, "termo".)
                                                        // http://localhost:8080/podcasts/search?title=blablabla
    return "Vc procurou por " + termo;
  }
}
