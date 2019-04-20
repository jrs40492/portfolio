let call;

document.onwheel = () => {
  clearInterval(call);
};

const scroll = (offset, scrollRate) => {
  const difference = offset - window.pageYOffset;

  if (difference < scrollRate) {
    scrollRate = difference;
  }

  if (difference != 0) {
    window.scrollBy(0, scrollRate);
    return;
  }

  clearInterval(call);
};

const scrollListen = e => {
  e.preventDefault();

  // Set scroll rate
  const scrollRate = 12;
  const target = e.srcElement.dataset.id;

  // Get offset from top of page
  const offset = document.getElementById(`${target}-section`).offsetTop;
  call = setInterval(() => scroll(offset, scrollRate), 2);
};

// Add Event Listener to parent Element
const buttons = document.getElementsByClassName('scroll-btn');

Array.from(buttons).forEach(element => {
  element.addEventListener('click', scrollListen);
});

/*
  Display the "Back to Top" button if scrolled past the second project
*/
const isOnScreen = elem => {
  const bounding = elem.getBoundingClientRect();
  return bounding.top <= 0;
};

const elem = document.getElementById('data-table');
const backToTopButton = document.getElementById('back-to-top-button');

window.addEventListener('scroll', e => {
  if (isOnScreen(elem)) {
    backToTopButton.style.display = 'initial';
  } else {
    backToTopButton.style.display = 'none';
  }
});
