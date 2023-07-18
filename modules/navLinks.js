export default function initializeNavLinks() {
  const sections = document.getElementsByTagName('section');
  const navLinks = document.getElementsByTagName('a');

  sections[0].style.display = 'none';

  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', () => {
      for (let j = 0; j < sections.length; j += 1) {
        if (i === j) {
          sections[j].style.display = 'block';
        } else {
          sections[j].style.display = 'none';
        }
      }
    });
  }
}
