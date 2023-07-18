// export default function displayBooks() {
//   const booksDiv = document.getElementById('books');
//   const list = document.querySelector('.list-div');

//   const books = JSON.parse(localStorage.getItem('books')) || [];

//   booksDiv.innerHTML = '';

//   if (books.length === 0) {
//     booksDiv.textContent = 'No books in the collection.';
//     return;
//   }

//   books.forEach((book, index) => {
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('book');

//     const titleSpan = document.createElement('span');
//     titleSpan.classList.add('book-title');
//     titleSpan.textContent = book.title;

//     const authorSpan = document.createElement('span');
//     authorSpan.classList.add('book-author');
//     authorSpan.textContent = `by ${book.author}`;

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-button');
//     removeButton.setAttribute('type', 'button');
//     removeButton.setAttribute('data-index', index);
//     removeButton.textContent = 'Remove';

//     removeButton.addEventListener('click', () => {
//       removeBook(index);
//     });

//     bookDiv.appendChild(titleSpan);
//     bookDiv.appendChild(authorSpan);
//     bookDiv.appendChild(removeButton);
//     booksDiv.appendChild(bookDiv);
//   });

//   function removeBook(index) {
//     books.splice(index, 1);
//     localStorage.setItem('books', JSON.stringify(books));
//     displayBooks();
//   }
// }

export default function displayBooks() {
  const booksDiv = document.getElementById('books');
  const books = JSON.parse(localStorage.getItem('books')) || [];

  booksDiv.innerHTML = '';

  if (books.length === 0) {
    booksDiv.textContent = 'No books in the collection.';
    return;
  }

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('book-title');
    titleSpan.textContent = book.title;

    const authorSpan = document.createElement('span');
    authorSpan.classList.add('book-author');
    authorSpan.textContent = `by ${book.author}`;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-button');
    removeButton.setAttribute('type', 'button');
    removeButton.setAttribute('data-index', index);
    removeButton.textContent = 'Remove';

    function removeBook(index) {
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      displayBooks();
    }
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    bookDiv.appendChild(titleSpan);
    bookDiv.appendChild(authorSpan);
    bookDiv.appendChild(removeButton);
    booksDiv.appendChild(bookDiv);
  });
}
