package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetails;

public record BookDTO(Long id, String title, String genre, BookDetails bookDetails) {

  public Book toBook() {
    return new Book(id, title, genre, bookDetails);
  }
}
