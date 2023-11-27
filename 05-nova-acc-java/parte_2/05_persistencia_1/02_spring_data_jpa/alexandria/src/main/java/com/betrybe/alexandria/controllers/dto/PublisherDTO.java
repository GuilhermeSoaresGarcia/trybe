package com.betrybe.alexandria.controllers.dto;

import java.util.List;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.Publisher;

public record PublisherDTO(Long id, String name, String address, List<Book> books) {
  public Publisher toPublisher() {
    return new Publisher(id, name, address, books);
  }
}
