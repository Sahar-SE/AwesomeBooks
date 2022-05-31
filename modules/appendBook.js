import saveBooksLocally from '../saveBooks.js';
import Book from '../modules/book.js';

const bookList = document.querySelector('#book-list');
const appendBook = (book, index) => {
  const bookElement = document.createElement('tr');
  const td = document.createElement('td');
  td.classList.add('border-0', 'd-flex', 'justify-content-end');
  const rmvBtn = document.createElement('button');
  rmvBtn.classList.add('remove-button', 'btn', 'btn-danger', 'btn-sm');
  rmvBtn.innerText = 'Remove';

  td.appendChild(rmvBtn);

  bookElement.innerHTML = `<td class="align-middle border-0">"${book.title}" by ${book.author}</td>`;
  bookElement.appendChild(td);

  bookList.appendChild(bookElement);
  saveBooksLocally();

  const rmvBook = Book.books[index];
  rmvBtn.addEventListener('click', () => {
    bookElement.remove();
    Book.rmvBook(rmvBook);
    saveBooksLocally();
  });
};

export default appendBook;