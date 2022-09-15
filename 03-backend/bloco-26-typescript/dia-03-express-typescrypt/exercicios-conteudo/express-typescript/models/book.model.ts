import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/book.interface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Array<Book>> { // o tipo poderia ser declarado assim também: Book[] - conforme linha 16
    const result = await this.connection.execute(
      'SELECT * FROM books'
    );
    const [rows] = result;
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>( // o que faz esse "ResultSetHeader"? RESP: retorno depois de um insert
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }

  public async getByID(id: number): Promise<Book> {
    const result = await this.connection.execute(
      'SELECT * FROM books WHERE id = ? ', [id]
    );    
    const [rows] = result;
    const [book] = rows as Book[];
    return book;
  }  
}
