package com.betrybe.alexandria.controllers.dto;

import com.betrybe.alexandria.models.entities.Author;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetails;
import com.betrybe.alexandria.models.entities.Publisher;
import java.util.List;

public record BookDTO(Long id, String title, String genre, BookDetails bookDetails,
    Publisher publisher,
    List<Author> authors) {

  public Book toBook() {
    return new Book(id, title, genre, bookDetails, publisher, authors);
  }
}
