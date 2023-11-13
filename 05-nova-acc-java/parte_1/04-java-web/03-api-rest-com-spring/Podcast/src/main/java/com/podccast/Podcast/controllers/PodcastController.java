package com.podccast.Podcast.controllers;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.podccast.Podcast.dto.PodcastDto;
import com.podccast.Podcast.services.PodcastService;
import com.podccast.Podcast.dto.PodcastCreationDto;

@RestController
@RequestMapping("/podcasts")
public class PodcastController {

  private PodcastService service;

  @Autowired
  public PodcastController(PodcastService service) {
    this.service = service;
  }

  @GetMapping
  public String getRoot() {
    return "Resposta podcast!!";
  }

  @GetMapping("/{id}")
  public ResponseEntity<PodcastDto> getPodcast(@PathVariable Integer id) { // @PathVariable: essa anotação, utilizada no
                                                                           // parâmetro do
    // método, indica que o valor daquele parâmetro deve ser mapeado
    // automaticamente, a partir da variável de caminho que tenha o
    // mesmo nome do parâmetro (no caso, id).

    if (id > 1000) { // Para fins de teste, se o id for > 1000, a API retorna header com status code
                     // 404
      return ResponseEntity.notFound().build();
    }

    Podcast foundPodcast = service.findPodcastById(id);

    PodcastDto result = new PodcastDto( // Utilizando DTO para o resultado ocultar o token
        foundPodcast.getId(),
        foundPodcast.getName(),
        foundPodcast.getUrl());

    return ResponseEntity.ok(result); // Retorna header com status code 200 e body já formatado em json
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

  @PostMapping
  public ResponseEntity<PodcastDto> newPodcast(@RequestBody PodcastCreationDto newPodcast) { // PodcastCreationDto,
                                                                                             // contém apenas o nome e a
                                                                                             // URL do podcast
    Podcast podcast = service.createPodcast(newPodcast);

    PodcastDto podcastDto = new PodcastDto(podcast.getId(), podcast.getName(), podcast.getUrl());
    return ResponseEntity.status(HttpStatus.CREATED).body(podcastDto);
  }
}
