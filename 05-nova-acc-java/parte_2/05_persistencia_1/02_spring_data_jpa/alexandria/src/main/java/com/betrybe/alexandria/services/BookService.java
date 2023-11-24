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

  public Optional<BookDetails> insertBookDetails(Long bookId, BookDetails bookDetails) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);

    if (optionalBook.isPresent()) {
      Book book = optionalBook.get();
      bookDetails.setBook(book);
      BookDetails newBookDetails = bookDetailsRepository.save(bookDetails);
      return Optional.of(newBookDetails);
    }
    return Optional.empty();
  }

  public Optional<BookDetails> updateBookDetails(Long bookId, BookDetails bookDetails) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);

    if (optionalBook.isPresent()) {
      Book book = optionalBook.get();
      BookDetails bookDetailsFromDB = book.getBookDetails();
      bookDetailsFromDB.setSummary(bookDetails.getSummary());
      bookDetailsFromDB.setPageCount(bookDetails.getPageCount());
      bookDetailsFromDB.setYear(bookDetails.getYear());
      bookDetailsFromDB.setIsbn(bookDetails.getIsbn());

      BookDetails updatedBookDetails = bookDetailsRepository.save(bookDetailsFromDB);
      return Optional.of(updatedBookDetails);
    }

    return Optional.empty();
  }

  public Optional<BookDetails> removeBookDetailsById(Long bookId) {
    Optional<Book> optionalBook = bookRepository.findById(bookId);

    if (optionalBook.isPresent()) {
      Book book = optionalBook.get();
      Optional<BookDetails> optionalBookDetails = bookDetailsRepository.findById(book.getBookDetails().getId());

      if (optionalBookDetails.isPresent()) {
        book.setBookDetails(null);
        BookDetails bookDetails = optionalBookDetails.get();
        bookDetailsRepository.deleteById(bookDetails.getId());

        return Optional.of(bookDetails);
      }
    }
    return Optional.empty();
  }

  public Optional<BookDetails> getBookDetailsById(Long id) {
    return bookDetailsRepository.findById(id);
  }

}
