let sections, pageHeight, pageWidth;
const colors = {
  red: 0,
  blue: 0,
  green: 0
};

document.addEventListener('DOMContentLoaded', init, false);
function init() {
  sections = document.getElementsByClassName('color-bg');
  pageHeight = window.innerHeight / 255;
  pageWidth = window.innerWidth / 255;

  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', orientationHandler, false);
  }

  sections[0].addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    calculateColorsByMouse(x, y);
    updateBackground(sections[0]);
  });
}

// Handles the movement of the phone
const orientationHandler = e => {
  calculateColorsByMotion(e.beta, e.gamma, e.alpha);
  updateBackground(sections[0]);
};

// Get colors based on phone orientation/movement
const calculateColorsByMotion = (x, y, z) => {
  colors.red = 255 - Math.abs(Math.round(x) * 2 - 105);
  colors.blue = 255 - Math.abs(Math.round(y) * 4 - 105);
  colors.green = 255 - Math.abs(Math.round(z) - 105);
};

// Get colors based on mouse position
const calculateColorsByMouse = (x, y) => {
  colors.red = 255 - Math.round(x / pageWidth);
  colors.green = Math.round(y / pageHeight);
  colors.blue = 255 - (colors.red + colors.green) / 2;
};

const updateBackground = section => {
  let gradient;

  const page = section.dataset.page;

  switch (page) {
    case 'home':
      gradient = `linear-gradient(to bottom right, rgba(${
        colors.red
        }, 0, 0, 0.9), rgba(0, 0, ${colors.blue}, 0.7) 60%, rgba(0, ${
        colors.green
        }, 0, 0.7) 80%)`;
      break;

    case 'navigation':
      gradient = `linear-gradient(to right, rgba(0, 0, ${
        colors.blue
        }, 1), rgba(${colors.red}, 0, 0, 1) 70%)`;
      break;

    case 'contact':
      gradient = `linear-gradient(to bottom left, rgba(${
        colors.red
        }, 0, 0, 0.9), rgba(0, 0, ${colors.blue}, 0.7) 60%, rgba(0, ${
        colors.green
        }, 0, 0.7) 80%)`;
      break;

    default:
      gradient = `linear-gradient(to right, rgba(${
        colors.red
        }, 0, 0, 0.9), rgba(0, 0, ${colors.blue}, 0.7) 60%, rgba(0, ${
        colors.green
        }, 0, 0.7) 80%)`;
      break;
  }
  section.style.backgroundImage = gradient;
};
