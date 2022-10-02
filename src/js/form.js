import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'make-your-choice';
const ABOUT_KEY = 'about-form';
const FRANCHISE_KEY = 'contacts-form';

const header_form = document.querySelector('.form-a');

header_form.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
});

header_form.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(STORAGE_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

// ABOUT

const about_form = document.querySelector('[data-about]');

about_form.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(ABOUT_KEY);
});

about_form.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(ABOUT_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(ABOUT_KEY, JSON.stringify(formData));
  }, 500)
);

// CONTACTS

const contacts_form = document.querySelector('.franchise-form');

contacts_form.addEventListener('submit', evt => {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(FRANCHISE_KEY);
});

contacts_form.addEventListener(
  'input',
  Throttle(evt => {
    let formData = localStorage.getItem(FRANCHISE_KEY);
    formData = formData ? JSON.parse(formData) : {};

    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(FRANCHISE_KEY, JSON.stringify(formData));
  }, 500)
);

function initForm(key, item) {
  let parsedData = localStorage.getItem(key);

  if (parsedData) {
    parsedData = JSON.parse(parsedData);
    Object.entries(parsedData).forEach(([name, value]) => {
      item.elements[name].value = value;
    });
  }
}
initForm(STORAGE_KEY, header_form);
initForm(ABOUT_KEY, about_form);
initForm(FRANCHISE_KEY, contacts_form);
