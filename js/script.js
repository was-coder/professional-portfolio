// start of variables
const mobileMenu = document.querySelector('#hamburger-div');
const cancelMobile = document.querySelectorAll('.hamburger');
const buttonClick = document.querySelectorAll('.button');
const cancelButton = document.querySelector('.cancel');
const btn = document.querySelector('#btn');
const fullname = document.querySelector('#fullname');
const email = document.querySelector('#email');
const messageMe = document.querySelector('#messageMe');
const blurAll = document.querySelector('#blurAll');
const popup = document.querySelector('#popup');
// end of variables

// Start of hamburger part
const toggleShowClass = () => {
  document.querySelector('.mobileDiv').classList.toggle('show');
};

mobileMenu.addEventListener('click', toggleShowClass);

cancelMobile.forEach(x => {
  x.addEventListener('click', toggleShowClass);
});
// End of hamburger part

// start of validation part

const setError = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control getError';
};

const setSuccess = (value, message) => {
  const formControl = value.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control getSuccess';
};

const emailCheck = email => {
  const getEmail = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return getEmail.test(String(email).toLowerCase());
};

const disableBtn = value => {
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
    name: 'Professional',
    description:
      'lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/Placeholder.jpg)',
    technology: '<li>Html</li><li>Html</li><li>Html</li>',
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'Wasiu',
    description:
      'iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis',
    image: 'url(./image/shape1.png)',
    technology: '<li>Css</li><li>Css</li><li>Css</li>',
    live: 'href="https://www.facebook.com"',
    source: 'href="https://www.facebook.com"',
  },
  {
    name: 'Adelakun',
    description: 'rem sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/shape2.png)',
    technology: '<li>Js</li><li>Js</li><li>Js</li>',
    live: 'https://www.twitter.com',
    source: 'https://www.twitter.com',
  },
  {
    name: 'Olaiya',
    description: 'kjaqwskjsa lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/shape3.png)',
    technology: '<li>javascript</li><li>Javascript</li><li>Javascript</li>',
    live: 'https://www.nairaland.com',
    source: 'https://www.nairaland.com',
  },
  {
    name: 'hwjshhskjws',
    description: 'qioqosqsa lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/Icon.png)',
    technology: '<li>Html</li><li>Html</li><li>Html</li>',
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'qoiqjwkwq',
    description: 'lorem qwiuoqq JIWWIQJJWS sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/Placeholder.jpg)',
    technology: '<li>Css</li><li>Html</li><li>Html</li>',
    live: 'https://www.naijaloaded.com',
    source: 'https://www.naijaloaded.com',
  },
  {
    name: 'Mr Taj',
    description: 'iqqjwqswq quiwqdhsxsn usahskaljlsja lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(./image/Icon.png)',
    technology: '<li>Js</li><li>Html</li><li>Html</li>',
    live: 'https://www.goal.com',
    source: 'https://www.goal.com',
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
  blurAll.classList.toggle('active');
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
