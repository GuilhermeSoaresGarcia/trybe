import express, { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import * as dotenv from 'dotenv';
import 'express-async-errors';
import BooksRoutes from './routes/books.routes';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (_req: Request, res: Response) => {
  res.status(StatusCodes.OK).json('Express + TypeScript')
});

app.use(BooksRoutes);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})