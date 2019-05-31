let call;
const scrollRateDefault = 10;
let scrollRate = scrollRateDefault;
const className = 'scroll-btn';

document.onwheel = () => {
  clearInterval(call);
};

const scrollTo = offset => {
  // Get difference between top of page and current offset
  const difference = offset - window.pageYOffset;

  // Determine if we need to scroll up or down
  if (difference < 0 && scrollRate >= 0) {
    scrollRate *= -1;
  }

  // Gradually increase scroll rate
  if (scrollRate >= 0) {
    scrollRate += 1;
  } else {
    scrollRate -= 1;
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
  scrollRate = scrollRateDefault;
  const target = e.srcElement.dataset.id;

  // Get offset from top of page
  const offset = document.getElementById(`${target}`).offsetTop;
  call = setInterval(() => scrollTo(offset), 5);
};

const buttons = document.getElementsByClassName(className);
Array.from(buttons).forEach(element => {
  element.addEventListener('click', scrollListener);
});

/*
  Helpers
*/

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
