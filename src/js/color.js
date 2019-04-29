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

    let direction;

    let redPercent = 0;
    let bluePercent = '60%';
    let greenPercent = '80%';

    let redOpacity = 0.9;
    let blueOpacity = 0.7;
    let greenOpacity = 0.7;

    switch (page) {
      case 'home':
        direction = 'bottom right';
        break;

      case 'navigation':
        direction = 'right';
        bluePercent = '45%';
        greenPercent = '80%';
        green = red;
        break;

      case 'contact':
        direction = 'bottom left';
        break;

      default:
        direction = 'right';
        break;
    }
    section.style.backgroundImage = `linear-gradient(to ${direction}, rgba(${red}, 0, 0, ${redOpacity}) ${redPercent}, rgba(0, 0, ${blue}, ${blueOpacity}) ${bluePercent}, rgba(0, ${green}, 0, ${greenOpacity}) ${greenPercent})`;
  });
});
