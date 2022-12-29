// start of variables
const mobileMenu = document.querySelector('#hamburger-div');
const cancelMobile = document.querySelectorAll('.hamburger');
const buttonClick = document.querySelectorAll('.button');
const cancelButton = document.querySelector('.cancel');
const btn = document.querySelector('#btn');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const messageMe = document.querySelector('#messageMe');
const popup = document.querySelector('#popup');
// end of variables

// Start of hamburger part
const toggleShowClass = () => {
  document.querySelector('.mobile-div').classList.toggle('show');
};

mobileMenu.addEventListener('click', toggleShowClass);

cancelMobile.forEach((x) => {
  x.addEventListener('click', toggleShowClass);
});
// End of hamburger part

// start of validation part

const setError = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control get-error';
};

const setSuccess = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control get-success';
};

const emailCheck = (email) => {
  // eslint-disable-next-line operator-linebreak
  const getEmail =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return getEmail.test(String(email).toLowerCase());
};

const disableBtn = (value) => {
  btn.disabled = value;
};
disableBtn(true);

const storeValues = {
  name: '',
  email: '',
  message: '',
};

const setValues = () => {
  storeValues.name = fullname.value;
  storeValues.email = email.value;
  storeValues.message = messageMe.value;
  localStorage.setItem('myValues', JSON.stringify(storeValues));
};

const getValues = () => {
  localStorage.getItem('storeValues');
};

const validateName = () => {
  if (fullname.value === '') {
    setError(fullname, 'Name cannot be empty');
    disableBtn(true);
  } else if (fullname.value.length < 3) {
    setError(fullname, 'Name cannot be less than 3 characters');
    disableBtn(true);
  } else {
    setSuccess(fullname);
  }
  setValues();
};

const validateEmail = () => {
  if (email.value === '') {
    setError(email, 'Email cannot be empty');
    disableBtn(true);
  } else if (!emailCheck(email.value)) {
    setError(email, 'Email is not valid');
    disableBtn(true);
  } else {
    setSuccess(email);
  }
  setValues();
};

const validateMessage = () => {
  if (messageMe.value === '') {
    setError(messageMe, 'Message cannot be empty');
    disableBtn(true);
  } else if (messageMe.value.length < 15) {
    setError(messageMe, 'Message should be more than 15 characters');
    disableBtn(true);
  } else {
    setSuccess(messageMe);
    disableBtn(false);
  }
  setValues();
};

fullname.addEventListener('input', validateName);
email.addEventListener('input', validateEmail);
messageMe.addEventListener('input', validateMessage);
window.addEventListener('load', getValues);

// End of validation part

// Start of project information
const information = [
  {
    name: 'Book Library',
    description:
      'This is a Book Library that let users to store information of a book they find interesting and will love to read again or recommend to anyone. It also store data using local storage.',
    image: 'url(./image/book-library.PNG)',
    technology: '<li>Html</li><li>Css</li><li>Bootstrap</li><li>Javascript</li>',
    live: 'https://books-lib.netlify.app/',
    source: 'https://github.com/was-coder/book-library',
  },
  {
    name: 'MetaBnb Clone',
    description:
      'we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone',
    image: 'url(./image/metaBnb.PNG)',
    technology: '<li>Css</li><li>Javascript</li><li>React</li>',
    live: 'https://bnb-meta.netlify.app/',
    source: 'https://github.com/was-coder/meta-bnb',
  },
  {
    name: 'Count D App',
    description:
      'This is a counter application that counts value either by increasing or decreasing the value.',
    image: 'url(./image/countapp.PNG)',
    technology: '<li>Css</li><li>Javascript</li><li>React</li><li>Error Boundary</li>',
    live: 'https://countdapp.netlify.app/',
    source: 'https://github.com/was-coder/react-counter',
  },
  {
    name: 'NextWeb Clone',
    description: 'This is a nextweb clone project that shows latest tech news',
    image: 'url(./image/nextweb.PNG)',
    technology: '<li>Html</li><li>Css</li><li>Javascript</li>',
    live: 'https://nextwebclone.netlify.app/',
    source: 'https://github.com/was-coder/nextWebClone',
  },
  {
    name: 'Calculator App',
    description:
      'This is a calculator application that calculates values. Implementation of Reducer was used',
    image: 'url(./image/calculator.PNG)',
    technology: '<li>Css</li><li>React</li><li>Reducer</li>',
    live: 'https://waslead-calc.netlify.app/',
    source: 'https://github.com/was-coder/react-calculator',
  },
];
// End of project information

// Start of including project information inside popup
function getInfo(i) {
  document.querySelector('.name').innerText = information[i].name;
  document.querySelector('#description').innerText = information[i].description;
  document.querySelector('.technology').innerHTML = information[i].technology;
  document.querySelector('#live').href = information[i].live;
  document.querySelector('#source').href = information[i].source;
  document.querySelector('#image').style.backgroundImage = information[i].image;
}
// End of including project information inside popup

// Start of calling and removing the popup functions
const safe = () => {
  popup.classList.toggle('active');
};

for (let i = 0; i < information.length; i += 1) {
  buttonClick[i].addEventListener('click', () => {
    getInfo(i);
    safe();
  });
}

cancelButton.addEventListener('click', safe);
// Ending of calling and removing the popup functions
