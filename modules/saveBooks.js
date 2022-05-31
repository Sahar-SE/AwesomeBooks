import Book from '../modules/book.js';

const saveBooksLocally = () => {
  localStorage.setItem('books', JSON.stringify(Book.books));
};

export default saveBooksLocally;