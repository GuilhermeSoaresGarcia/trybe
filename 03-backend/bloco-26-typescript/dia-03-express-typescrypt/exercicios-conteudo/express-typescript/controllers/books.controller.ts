import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import BookService from "../services/books.service";

export default class BooksController {
  constructor(private bookService = new BookService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };

  public getByID = async (req: Request, res: Response) => {
    const id = Number(req.params.id); // parseInt ou number dá na mesma?
    // const { id } = Number(req.params);  <--- pq não pode ser com desconstructuring?
    const book = await this.bookService.getByID(id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found!' });
    }

    res.status(StatusCodes.OK).json(book);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const result = await this.bookService.create(book);
    res.status(StatusCodes.CREATED).json(result);
  }
}