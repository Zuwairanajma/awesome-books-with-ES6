export default function addBook(library) {
  library.addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = library.titleInput.value;
    const author = library.authorInput.value;
    library.addBook(title, author);
    library.titleInput.value = '';
    library.authorInput.value = '';
  });
}
