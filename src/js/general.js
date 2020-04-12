// Display the "Back to Top" button if scrolled past the third project
let elem;
const projects = document.querySelectorAll('.project');
const backToTopButton = document.getElementById('back-to-top-button');

projects.forEach((project, index) => {
  if (index === 2) {
    elem = project;
  }
});

// Check if user has scrolled the third project onto the screen
window.addEventListener('scroll', e => {
  if (isOnScreen(elem) || isPastScreen(elem)) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});
