import appendBook from './appendBook.js';
import Book from './book.js';

const appendAllBooks = () => {
  Book.books.forEach((book, index) => {
    appendBook(book, index);
  });
};
export default appendAllBooks;