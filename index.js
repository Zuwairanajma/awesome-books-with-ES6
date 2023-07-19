import { DateTime } from './node_modules/luxon/src/luxon.js';
import Library from './modules/library.js';
import { displayBooks } from './modules/ui.js';
import { initializeNavLinks } from './modules/navLinks.js';

const library = new Library();

const getCurrentDate = () => {
  const currentDateTime = DateTime.now();
  const formattedDateTime = currentDateTime.toLocaleString(DateTime.DATETIME_FULL);
  return formattedDateTime;
};
const dateDisplay = document.querySelector('.currentDate');

dateDisplay.innerHTML = getCurrentDate();

initializeNavLinks(library);
displayBooks(library);