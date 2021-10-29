
var  throttle = require('lodash.throttle');

const feedbackForm = document.querySelector('.feedback-form');
console.log(feedbackForm);
const LOCALSTORAGE_KEY = "feedback-form-state";


feedbackForm.addEventListener('input', catchDataForm);

function catchDataForm (event) {
  event.preventDefault();
  const formData = new formData(feedbackForm);
  console.log(formData);


}


