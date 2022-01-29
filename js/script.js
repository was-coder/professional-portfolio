const mobileMenu = document.querySelector('.hamburger-div');

mobileMenu.addEventListener('click', () => {
  document.querySelector('.mobileDiv').classList.add('show');
});

const cancelMobile = document.querySelectorAll('.hamburger');

const removeActiveClass = () => {
  document.querySelector('.mobileDiv').classList.remove('show');
};

cancelMobile.forEach(x => {
  x.addEventListener('click', removeActiveClass);
});

// start of email validation
const form = document.getElementById('form');
const email = document.getElementById('email');

function setError(value, message) {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control getError';
}

function setSuccess(value, message) {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control getSuccess';
}

function emailCheck(email) {
  const getEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return getEmail.test(String(email).toLowerCase());
}

function getValues() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError(email, 'Email cannot be blank');
  } else if (!emailCheck(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email, 'Input Accepted');
  }
}

form.addEventListener('click', () => {
  getValues();
});
