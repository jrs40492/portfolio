const section = document.getElementById('introduction');
const pageHeight = window.innerHeight / 255;
const pageWidth = window.innerWidth / 255;

const inverseColor = value => {
  return 255 - value;
};

section.addEventListener('mousemove', e => {
  const x = e.clientX;
  const y = e.clientY;

  const red = x / pageWidth;
  const green = y / pageHeight;
  const blue = (red + green) / 2;

  section.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  const background = (red * 299 + green * 587 + blue * 114) / 1000;
  const color = background >= 128 ? 'black' : 'white';

  section.style.color = color;

  const buttons = section.querySelectorAll('.button');
  buttons.forEach(button => {
    button.style.border = `1px solid ${color}`;
  });

  const links = section.querySelectorAll('a');
  links.forEach(link => {
    link.style.color = color;
  });
});
