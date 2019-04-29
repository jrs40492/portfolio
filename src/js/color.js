const sections = document.querySelectorAll('.color-bg');

sections.forEach(section => {
  section.addEventListener('mousemove', e => {
    const x = e.clientX;
    const y = e.clientY;

    const pageHeight = window.innerHeight / 255;
    const pageWidth = window.innerWidth / 255;

    const page = section.dataset.page;

    let red = 255 - Math.round(x / pageWidth);
    let green = Math.round(y / pageHeight);
    let blue = 255 - (red + green) / 2;

    let gradient;

    switch (page) {
      case 'home':
        gradient = `linear-gradient(to bottom right, rgba(${red}, 0, 0, 0.9), rgba(0, 0, ${blue}, 0.7) 60%, rgba(0, ${green}, 0, 0.7) 80%)`;
        break;

      case 'navigation':
        green = red;
        gradient = `linear-gradient(to right, rgba(0, 0, ${blue}, 1), rgba(${red}, 0, 0, 1) 70%)`;
        break;

      case 'contact':
        gradient = `linear-gradient(to bottom left, rgba(${red}, 0, 0, 0.9), rgba(0, 0, ${blue}, 0.7) 60%, rgba(0, ${green}, 0, 0.7) 80%)`;
        break;

      default:
        gradient = `linear-gradient(to right, rgba(${red}, 0, 0, 0.9), rgba(0, 0, ${blue}, 0.7) 60%, rgba(0, ${green}, 0, 0.7) 80%)`;
        break;
    }
    section.style.backgroundImage = gradient;
  });
});
