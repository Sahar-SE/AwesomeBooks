// Local storage
export default class Store {
  static bookLocalStorage() {
    return JSON.parse(localStorage.getItem('books'));
  }

  static getBooks() {
    return Store.bookLocalStorage();
  }

  static addBook(book) {
    const books = Store.bookLocalStorage() ? Store.bookLocalStorage() : [];
    if (Array.isArray(books)) {
      books.push(book);
    }
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(index) {
    const books = Store.getBooks();
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
