const contactForm = document.getElementById('contact-form');
const fields = document.querySelectorAll('input, textarea');
const shipButton = document.getElementById('ship-button');

if (contactForm) {
  // Listen for form submission
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let params = {};

    fields.forEach(field => {
      params[field.name] = field.value;
    });

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/send', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.send(JSON.stringify(params));

    xhr.onreadystatechange = function() {
      if (this.readyState != 4) {
        return;
      }

      if (this.status == 200) {
        console.log(xhr.responseText);
        shipButton.innerHTML = 'Shipped!';
        shipButton.disabled = true;
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
}

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
    field.classList.remove('invalid');
    field.nextSibling.style.display = 'none';
  });
});
