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
  const offset = document.getElementById(target).offsetTop;
  call = setInterval(() => scroll(offset, scrollRate), 2);
};

// Add Event Listener to parent Element
const buttons = document.getElementsByClassName('scroll-btn');

Array.from(buttons).forEach(element => {
  element.addEventListener('click', scrollListen);
});
