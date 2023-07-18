export default class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.booksDiv = document.getElementById('books');
    this.addBookForm = document.getElementById('addBookForm');
    this.titleInput = document.getElementById('titleInput');
    this.authorInput = document.getElementById('authorInput');

    this.addBookForm.addEventListener('submit', this.handleFormSubmit.bind(this));
    this.displayBooks();
  }

  displayBooks() {
    this.booksDiv.innerHTML = '';

    if (this.books.length === 0) {
      this.booksDiv.textContent = 'No books in the collection.';
      return;
    }

    this.books.forEach((book, index) => {
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

      removeButton.addEventListener('click', () => {
        this.removeBook(index);
      });

      bookDiv.appendChild(titleSpan);
      bookDiv.appendChild(authorSpan);
      bookDiv.appendChild(removeButton);
      this.booksDiv.appendChild(bookDiv);
    });
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };

    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const title = this.titleInput.value;
    const author = this.authorInput.value;
    this.addBook(title, author);

    this.titleInput.value = '';
    this.authorInput.value = '';
  }
}
