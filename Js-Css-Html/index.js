import updateDate from '../modules/luxon.js';
import getSectionId from '../modules/getSection.js';
import displaySection from '../modules/displaySection.js';
import activateNavItem from '../modules/navItem.js';
import Book from '../modules/book.js';
import appendBook from '../modules/appendBook.js';
import appendAllBooks from '../modules/appendAll.js';
import saveActiveNavItemLocally from '../modules/saveNavItems.js';

const form = document.querySelector('#form');
const listNav = document.querySelector('#list-nav-item');
const listSection = document.querySelector('#list-section');
const addNav = document.querySelector('#add-nav-item');
const contactNav = document.querySelector('#contact-nav-item');
const title = form.elements[0];
const author = form.elements[1];
const addBtn = document.querySelector('#add-btn');
const sucessMsg = document.querySelector('#success-msg');
const addSection = document.querySelector('#add-section');
const contactSection = document.querySelector('#contact-section');

window.addEventListener('load', () => {
  updateDate();
  const navItemId = localStorage.getItem('activeNavItem');
  const sectionId = getSectionId(navItemId);
  displaySection(sectionId);
  activateNavItem(navItemId);
  Book.books = JSON.parse(localStorage.getItem('books'));
  if (Book.books) {
    appendAllBooks();
  } else {
    Book.books = [];
  }
});

addBtn.addEventListener('click', () => {
  sucessMsg.innerText = '';
  if (title.value.length !== 0 && author.value.length !== 0) {
    const newBook = new Book(title.value, author.value);
    Book.addBook(newBook);
    appendBook(newBook, Book.books.length - 1);
    sucessMsg.innerText = `"${title.value}" by ${author.value} added`;
  }
  title.value = '';
  author.value = '';
});

listNav.addEventListener('click', () => {
  displaySection(listSection.id);
  activateNavItem(listNav.id);
  saveActiveNavItemLocally(listNav.id);
});

addNav.addEventListener('click', () => {
  displaySection(addSection.id);
  activateNavItem(addNav.id);
  saveActiveNavItemLocally(addNav.id);
});

contactNav.addEventListener('click', () => {
  displaySection(contactSection.id);
  activateNavItem(contactNav.id);
  saveActiveNavItemLocally(contactNav.id);
});

setInterval(() => {
  updateDate();
}, 1000);