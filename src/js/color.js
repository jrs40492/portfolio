const section = document.getElementById('introduction');

section.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  const pageHeight = window.innerHeight / 255;
  const pageWidth = window.innerWidth / 255;

  const red = Math.round(x / pageWidth);
  const green = Math.round(y / pageHeight);
  const blue = (red + green) / 2;

  section.style.backgroundImage = `linear-gradient(to bottom right, rgba(${red}, 0, 0, .6), rgba(0, ${green}, 0, .6), rgba(0, 0, ${blue}, .6))`;
});
