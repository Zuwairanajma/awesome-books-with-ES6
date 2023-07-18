import Library from './modules/library.js';
// import getCurrentDate from './modules/date.js';
import displayBooks from './modules/ui.js';
import initializeNavLinks from './modules/navLinks.js';
import removeBook from './modules/removeBook.js';
import addBook from './modules/addBook.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const library = new Library();
function getCurrentDate() {
  const currentDateTime = DateTime.now();
  const formattedDateTime = currentDateTime.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDateTime;
}

getCurrentDate();
displayBooks();
initializeNavLinks(library);
removeBook(library);
addBook(library);
