import Book from './book.js';

const saveBooksLocally = () => {
  localStorage.setItem('books', JSON.stringify(Book.books));
};

export default saveBooksLocally;