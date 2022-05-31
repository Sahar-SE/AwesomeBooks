/* eslint max-classes-per-file: ["error", 3] */

import Store from './Store.js';
import CreatBook from './Create.js';
import addTime from './DT.js';

// book class
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// display books
document.addEventListener('DOMContentLoaded', CreatBook.displayBooks);

// =============================================================
// Add book

document.getElementById('book-form').addEventListener('submit', (event) => {
  // preventDefault
  event.preventDefault();
  // get values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  // create New book
  const book = new Books(title, author);

  // Add book to the page
  CreatBook.createBookElements(book);

  // Add book to local storage
  Store.addBook(book);
  // clear the fields
  CreatBook.clearfields();
});

// =============================================================
// Remove book

document.querySelector('.books').addEventListener('click', (e) => {
  CreatBook.delete(e.target);
  Store.removeBook();
});

CreatBook.openListPage();
CreatBook.openAddPage();
CreatBook.openContactPage();
