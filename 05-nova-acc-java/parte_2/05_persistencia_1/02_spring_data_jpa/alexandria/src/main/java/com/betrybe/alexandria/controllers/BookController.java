package com.betrybe.alexandria.controllers;

import com.betrybe.alexandria.controllers.dto.BookDTO;
import com.betrybe.alexandria.controllers.dto.BookDetailsDTO;
import com.betrybe.alexandria.controllers.dto.ResponseDTO;
import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetails;
import com.betrybe.alexandria.services.BookService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/books")
public class BookController {

  private BookService bookService;

  @Autowired
  public BookController(BookService bookService) {
    this.bookService = bookService;
  }

  @PostMapping
  public ResponseEntity<ResponseDTO<Book>> createBook(@RequestBody BookDTO bookDTO) {
    Book insertedBook = bookService.insertBook(bookDTO.toBook());
    ResponseDTO<Book> responseDTO = new ResponseDTO<Book>("Livro criado com sucesso!", insertedBook);
    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @PutMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> editBook(@PathVariable Long bookId, @RequestBody BookDTO bookDTO) {
    Optional<Book> optionalBook = bookService.updateBook(bookId, bookDTO.toBook());

    if (optionalBook.isEmpty()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<Book>(
          "Não foi encontrado o livro de ID " + bookId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Book> responseDTO = new ResponseDTO<Book>(
        "Livro atualizado com sucesso!", optionalBook.get());
    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> removeBook(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.removeBookById(bookId);

    if (optionalBook.isEmpty()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<Book>(
          "Não foi possível localizar o livro de ID " + bookId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Book> responseDTO = new ResponseDTO<Book>(
        "Livro de ID " + bookId + " excluído com sucesso!", optionalBook.get());
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseDTO);
  }

  @GetMapping("/{bookId}")
  public ResponseEntity<ResponseDTO<Book>> getBookById(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.getBookById(bookId);

    if (optionalBook.isEmpty()) {
      ResponseDTO<Book> responseDTO = new ResponseDTO<Book>(
          "Não foi possível localizar o livro de ID " + bookId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<Book> responseDTO = new ResponseDTO<Book>("Livro encontrado:", optionalBook.get());
    return ResponseEntity.ok(responseDTO);
  }

  @GetMapping
  public List<BookDTO> getAllBooks() {
    List<Book> allBooks = bookService.getAllBooks();
    return allBooks.stream()
        .map((book) -> new BookDTO(
            book.getId(),
            book.getTitle(),
            book.getGenre(),
            book.getBookDetails(),
            book.getPublisher(),
            book.getAuthors()))
        .collect(Collectors.toList());
  }

  // BookDetails
  @PostMapping("/{bookId}/details")
  public ResponseEntity<ResponseDTO<BookDetails>> createBookDetails(@PathVariable Long bookId,
      @RequestBody BookDetailsDTO bookDetailsDTO) {
    Optional<Book> optionalBook = bookService.getBookById(bookId);

    if (optionalBook.isEmpty()) {
      ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
          "Não foi encontrado o detalhamento do livro de ID " + bookId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    Optional<BookDetails> insertedBookDetails = bookService.insertBookDetails(bookId, bookDetailsDTO.toBookDetails());
    ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>("Detalhamento do livro criado com sucesso!",
        insertedBookDetails.get());
    return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
  }

  @PutMapping("/{bookId}/details")
  public ResponseEntity<ResponseDTO<BookDetails>> editBookDetails(@PathVariable Long bookId,
      @RequestBody BookDetailsDTO bookDetailsDTO) {
    Optional<BookDetails> optionalBookDetails = bookService.updateBookDetails(bookId,
        bookDetailsDTO.toBookDetails());

    if (optionalBookDetails.isEmpty()) {
      ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
          "Não foi encontrado o detalhamento do livro de ID " + bookId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
        "Detalhamento do livro atualizado com sucesso!", optionalBookDetails.get());
    return ResponseEntity.ok(responseDTO);
  }

  @DeleteMapping("/{bookId}/details/{detailsId}")
  public ResponseEntity<ResponseDTO<BookDetails>> removeBookDetails(@PathVariable Long detailsId) {
    Optional<BookDetails> optionalBookDetails = bookService.removeBookDetailsById(detailsId);

    if (optionalBookDetails.isEmpty()) {
      ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
          "Não foi possível localizar o detalhamento do livro de ID " + detailsId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
        "Detalhamento do livro de ID " + detailsId + " excluído com sucesso!", optionalBookDetails.get());
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseDTO);
  }

  @GetMapping("/{bookId}/details/{detailsId}")
  public ResponseEntity<ResponseDTO<BookDetails>> getBookDetailsById(@PathVariable Long detailsId) {
    Optional<BookDetails> optionalBookDetails = bookService.getBookDetailsById(detailsId);

    if (optionalBookDetails.isEmpty()) {
      ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>(
          "Não foi possível localizar o detalhamento do livro de ID " + detailsId, null);
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(responseDTO);
    }

    ResponseDTO<BookDetails> responseDTO = new ResponseDTO<BookDetails>("Detalhamento de livro encontrado:",
        optionalBookDetails.get());
    return ResponseEntity.ok(responseDTO);
  }

  @PutMapping("/{bookId}/publisher/{publisherId}")
  public ResponseEntity<ResponseDTO<Book>> setPublisherToBook(@PathVariable Long bookId,
      @PathVariable Long publisherId) {
    Optional<Book> optionalBook = bookService.setPublisherToBook(bookId, publisherId);

    if (optionalBook.isEmpty()) {
      return ResponseEntity
          .status(HttpStatus.NOT_FOUND)
          .body(new ResponseDTO<Book>("Não foi possível localizar o livro de ID " + bookId, null));
    }

    return ResponseEntity
        .ok(new ResponseDTO<Book>("Editora vinculada ao livro com sucesso!", optionalBook.get()));
  }

  @DeleteMapping("/{bookId}/publisher")
  public ResponseEntity<ResponseDTO<Book>> removePublisherFromBook(@PathVariable Long bookId) {
    Optional<Book> optionalBook = bookService.removePublisherFromBook(bookId);

    if (optionalBook.isEmpty()) {
      return ResponseEntity
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponseDTO<Book>("Não foi possível remover a editora do livro de ID " + bookId, null));
    }

    return ResponseEntity
        .status(HttpStatus.ACCEPTED)
        .body(new ResponseDTO<Book>("Editora removida do livro de ID " + bookId, optionalBook.get()));
  }

  @PutMapping("/{bookId}/authors/{authorId}")
  public ResponseEntity<ResponseDTO<Book>> setAuthor(@PathVariable Long bookId, @PathVariable Long authorId) {
    Optional<Book> optionalBook = bookService.setAuthor(bookId, authorId);

    if (optionalBook.isEmpty()) {
      return ResponseEntity
          .status(HttpStatus.NOT_FOUND)
          .body(new ResponseDTO<Book>(
              "Não foi possível associar o livro de ID " + bookId + " ao autor de ID " + authorId, null));

    }
    return ResponseEntity.ok(new ResponseDTO<Book>(
        "Livro de ID "
            + bookId
            + " associado ao autor de ID "
            + authorId
            + " com sucesso!",
        optionalBook.get()));
  }

  @DeleteMapping("/{bookId}/authors/{authorId}")
  public ResponseEntity<ResponseDTO<Book>> removeAuthorFromBook(@PathVariable Long bookId,
      @PathVariable Long authorId) {
    Optional<Book> optionalBook = bookService.removeAuthorFromBook(bookId, authorId);

    if (optionalBook.isEmpty()) {
      return ResponseEntity
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body(new ResponseDTO<Book>(
              "Não foi possível remover o autor de ID " + authorId + " do livro de ID " + bookId, null));

    }
    return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ResponseDTO<Book>(
        "Autor de ID "
            + authorId
            + " desassociado do livro de ID "
            + bookId
            + " com sucesso!",
        optionalBook.get()));
  }
}