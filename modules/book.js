export default class Book {
  static books = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(book) {
    this.books.push(book);
  }

  static rmvBook(rmvBook) {
    this.books = this.books.filter((book) => book !== rmvBook);
  }
}