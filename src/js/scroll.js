let call;

document.onwheel = () => {
  clearInterval(call);
};

const scroll = (offset, scrollRate) => {
  const difference = offset - document.documentElement.scrollTop;

  if (difference < scrollRate) {
    scrollRate = difference;
  }

  if (difference > 0) {
    document.documentElement.scrollTop += scrollRate;
    return;
  }

  if (difference < 0) {
    document.documentElement.scrollTop -= scrollRate;
    return;
  }

  clearInterval(call);
};

const scroll_listen = e => {
  e.preventDefault();

  // Set scroll rate
  const scrollRate = 10;
  const target = e.srcElement.dataset.id;

  // Get offset from top of page
  const offset = document.getElementById(target).offsetTop;
  call = setInterval(() => scroll(offset, scrollRate), 5);
};

// Add Event Listener to parent Element
const buttons = document.getElementsByClassName('scroll-btn');

Array.from(buttons).forEach(element => {
  element.addEventListener('click', scroll_listen);
});
