package com.betrybe.alexandria.services;

import com.betrybe.alexandria.models.entities.Book;
import com.betrybe.alexandria.models.entities.BookDetails;
import com.betrybe.alexandria.models.repositories.BookDetailsRepository;
import com.betrybe.alexandria.models.repositories.BookRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

  private BookRepository bookRepository;
  private BookDetailsRepository bookDetailsRepository;

  @Autowired
  public BookService(BookRepository bookRepository, BookDetailsRepository bookDetailsRepository) {
    this.bookRepository = bookRepository;
    this.bookDetailsRepository = bookDetailsRepository;
  }

  public Book insertBook(Book book) {
    return bookRepository.save(book);
  }

  public Optional<Book> updateBook(Long id, Book book) {
    Optional<Book> optionalBook = bookRepository.findById(id);

    if (optionalBook.isPresent()) {
      Book bookFromDB = optionalBook.get();
      bookFromDB.setTitle(book.getTitle());
      bookFromDB.setGenre(book.getGenre());

      Book updatedBook = bookRepository.save(bookFromDB);
      return Optional.of(updatedBook);
    }

    return optionalBook;
  }

  public Optional<Book> removeBookById(Long id) {
    Optional<Book> bookOptional = bookRepository.findById(id);

    if (bookOptional.isPresent()) {
      bookRepository.deleteById(id);
    }
    return bookOptional;
  }

  public Optional<Book> getBookById(Long id) {
    return bookRepository.findById(id);
  }

  public List<Book> getAllBooks() {
    return bookRepository.findAll();
  }

  public BookDetails insertBookDetails(BookDetails bookDetails) {
    return bookDetailsRepository.save(bookDetails);
  }

  public Optional<BookDetails> updateBookDetails(Long id, BookDetails bookDetails) {
    Optional<BookDetails> optionalBookDetails = bookDetailsRepository.findById(id);

    if (optionalBookDetails.isPresent()) {
      BookDetails bookDetailsFromDB = optionalBookDetails.get();
      bookDetailsFromDB.setSummary(bookDetails.getSummary());
      bookDetailsFromDB.setPageCount(bookDetails.getPageCount());
      bookDetailsFromDB.setYear(bookDetails.getYear());
      bookDetailsFromDB.setIsbn(bookDetails.getIsbn());

      BookDetails updatedBookDetails = bookDetailsRepository.save(bookDetailsFromDB);
      return Optional.of(updatedBookDetails);
    }

    return optionalBookDetails;
  }

  public Optional<BookDetails> removeBookDetailsById(Long id) {
    Optional<BookDetails> bookDetailsOptional = bookDetailsRepository.findById(id);

    if (bookDetailsOptional.isPresent()) {
      bookDetailsRepository.deleteById(id);
    }
    return bookDetailsOptional;
  }

  public Optional<BookDetails> getBookDetailsById(Long id) {
    return bookDetailsRepository.findById(id);
  }

}
