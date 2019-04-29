let call;
let scrollRate = 10;

document.onwheel = () => {
  clearInterval(call);
};

const scrollTo = offset => {
  // Get difference between top of page and current offset
  const difference = offset - window.pageYOffset;

  if (difference < 0 && scrollRate >= 0) {
    scrollRate *= -1;
  }

  if (scrollRate >= 0) {
    scrollRate += 0.5;
  } else {
    scrollRate -= 0.5;
  }

  if (difference < scrollRate && difference > 0) {
    scrollRate = difference;
  }

  // Scroll until difference is 0
  if (difference != 0) {
    window.scrollBy(0, scrollRate);
    return;
  }

  // Clear the call once difference is 0
  clearInterval(call);
};

const scrollListener = e => {
  e.preventDefault();

  // Reset scroll rate
  scrollRate = 25;
  const target = e.srcElement.dataset.id;

  // Get offset from top of page
  const offset = document.getElementById(`${target}`).offsetTop;
  call = setInterval(() => scrollTo(offset), 5);
};

const buttons = document.getElementsByClassName('scroll-btn');
Array.from(buttons).forEach(element => {
  element.addEventListener('click', scrollListener);
});

// Check if element is fully on screen
const isOnScreen = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.top <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Check if element is off the top of the screen at all
const isPastScreen = elem => {
  const bounding = elem.getBoundingClientRect();
  return bounding.top <= 0;
};

/*
  Display the "Back to Top" button if scrolled past the third project
*/
let elem;
const projects = document.querySelectorAll('.project');
const backToTopButton = document.getElementById('back-to-top-button');

projects.forEach((project, index) => {
  if (index === 2) {
    elem = project;
  }
});

// Check if use has scrolled the third project onto the screen
window.addEventListener('scroll', e => {
  if (isOnScreen(elem) || isPastScreen(elem)) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});
