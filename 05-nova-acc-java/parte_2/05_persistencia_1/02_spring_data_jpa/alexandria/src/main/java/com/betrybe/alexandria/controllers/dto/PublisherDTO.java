package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Book;

public record PublisherDTO(Long id, String name, String address) {
  public Book toPublisher() {
    return new Book(id, name, address);
  }
}
