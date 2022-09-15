import connection from "../models/connection";
import BookModel from "../models/book.model";
import Book from "../interfaces/book.interface";

class BookService {
  public bookModel: BookModel;

  constructor() {
    this.bookModel = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.bookModel.getAll();
    return books;
  }

  public async getByID(id: number): Promise<Book> {
    const book = await this.bookModel.getByID(id);
    return book;
  }

  public async create(book: Book): Promise<Book>{
    const newBook = await this.bookModel.create(book);
    return newBook;
  }
}

export default BookService;
