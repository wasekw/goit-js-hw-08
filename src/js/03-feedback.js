
var  throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
const saveObject = {};

initForm ()

feedbackForm.addEventListener('input', throttle(catchDataForm, 500));
feedbackForm.addEventListener('submit', (event) => {
 event.preventDefault();

 console.log('User email is:', feedbackForm.email.value);
 console.log('User message is:', feedbackForm.message.value);
 localStorage.removeItem(LOCALSTORAGE_KEY);
 Object.entries(feedbackForm).forEach(([name])=> {
  saveObject[name] = '';
  feedbackForm.elements[name].value = '';
 })
})

function catchDataForm (event) {
  event.preventDefault();
saveObject[event.target.name] = event.target.value;
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveObject));
}

function initForm () {
      let fillFieldsForm = localStorage.getItem(LOCALSTORAGE_KEY);
      if (fillFieldsForm) {
        fillFieldsForm = JSON.parse(fillFieldsForm);
      Object.entries(fillFieldsForm).forEach(([name, value])=> {
        saveObject[name] = value;
        feedbackForm.elements[name].value = value;
      })
    }
  }



