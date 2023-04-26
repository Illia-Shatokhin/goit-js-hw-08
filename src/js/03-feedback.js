import _ from 'lodash';

const feedbackForm = document.querySelector('.feedback-form');

const initialInputValues = {
  email: '',
  message: '',
};

if (load('feedback-form-state')) {
  const localStorageValue = load('feedback-form-state');
  initialInputValuesChange(localStorageValue.email, localStorageValue.message);
  inputValuesFromInitialInputValues();
}

feedbackForm.addEventListener(
  'input',
  _.throttle(event => {
    initialInputValues[event.target.name] = event.target.value;
    save('feedback-form-state', initialInputValues);
  }),
  500
);

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  if (load('feedback-form-state')) {
    console.log(initialInputValues);
    remove('feedback-form-state');
  }
  initialInputValuesChange('', '');
  feedbackForm.reset();
});

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? false : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
}

function initialInputValuesChange(email, message) {
  initialInputValues.email = email;
  initialInputValues.message = message;
}

function inputValuesFromInitialInputValues() {
  feedbackForm.firstElementChild.firstElementChild.value =
    initialInputValues.email;
  feedbackForm.firstElementChild.nextElementSibling.firstElementChild.value =
    initialInputValues.message;
}
