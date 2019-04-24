const contactForm = document.getElementById('contact-form');
const fields = document.querySelectorAll('input, textarea');

// Listen for form submission
contactForm.addEventListener('submit', e => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/send');
  xhr.send();

  xhr.onreadystatechange = function() {
    if (this.readyState != 4) {
      return;
    }

    if (this.status == 200) {
      console.log(xhr.responseText);
      return;
    }

    if (this.status == 400) {
      const errors = JSON.parse(xhr.response);
      const keys = Object.keys(errors);

      keys.forEach(key => {
        const error = errors[key];
        addError(error.param, error.msg);
      });
    }
  };
});

const addError = (name, error) => {
  const elements = document.getElementsByName(name);
  elements.forEach(element => {
    element.classList.add('invalid');
    const sibling = element.nextSibling;
    sibling.innerHTML = error;
    sibling.style.display = 'block';
  });
};

// Listen for field change to clear errors
fields.forEach(field => {
  field.addEventListener('keyup', e => {
    console.log(field);
    field.classList.remove('invalid');
    field.nextSibling.style.display = 'none';
  });
});
