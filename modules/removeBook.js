// export default function removeBook(library) {
//   library.booksDiv.addEventListener('click', (event) => {
//     if (event.target.classList.contains('remove-button')) {
//       const index = parseInt(event.target.dataset.index);
//       library.removeBook(index);
//     }
//   });
// }
export default function removeBook(library) {
  library.booksDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
      const index = parseInt(event.target.dataset.index, 10); // Specify radix as 10
      library.removeBook(index);
    }
  });
}
