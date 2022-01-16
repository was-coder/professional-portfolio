// Start of event listeners variables
let mobileMenu = document.getElementById('hamburger-div');
let mobileMenuCancel = document.getElementById('cancel-hamburger');
let mobileMenuCancel1 = document.getElementById('cancel-butt1');
let mobileMenuCancel2 = document.getElementById('cancel-butt2');
let mobileMenuCancel3 = document.getElementById('cancel-butt3');
let buttonClick = document.querySelectorAll('.button');
let cancelButton = document.querySelector('.cancel');
// End of event listeners variables

// start of hamburger toggle
mobileMenu.addEventListener('click', () => {
  document.querySelector('.mobile-div').classList.add('show');
});
mobileMenuCancel.addEventListener('click', () => {
  document.querySelector('.mobile-div').classList.remove('show');
});
mobileMenuCancel1.addEventListener('click', () => {
  document.querySelector('.mobile-div').classList.remove('show');
});
mobileMenuCancel2.addEventListener('click', () => {
  document.querySelector('.mobile-div').classList.remove('show');
});
mobileMenuCancel3.addEventListener('click', () => {
  document.querySelector('.mobile-div').classList.remove('show');
});
// End of hamburger toggle

// Start of project information
let information = [
  {
    name: 'Professional',
    description:
      'lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/Placeholder.jpg)',
    technology: '<li>Html</li><li>Html</li><li>Html</li>',
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'Wasiu',
    description:
      'iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis iuwhwqjsa sdjhs uidsjas iuwsdjis',
    image: 'url(../image/shape1.png)',
    technology: '<li>Css</li><li>Css</li><li>Css</li>',
    live: 'href="https://www.facebook.com"',
    source: 'href="https://www.facebook.com"',
  },
  {
    name: 'Adelakun',
    description: 'rem sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/shape2.png)',
    technology: '<li>Js</li><li>Js</li><li>Js</li>',
    live: 'https://www.twitter.com',
    source: 'https://www.twitter.com',
  },
  {
    name: 'Olaiya',
    description: 'kjaqwskjsa lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/shape3.png)',
    technology: '<li>javascript</li><li>Javascript</li><li>Javascript</li>',
    live: 'https://www.nairaland.com',
    source: 'https://www.nairaland.com',
  },
  {
    name: 'hwjshhskjws',
    description: 'qioqosqsa lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/Icon.png)',
    technology: '<li>Html</li><li>Html</li><li>Html</li>',
    live: 'https://www.google.com',
    source: 'https://www.google.com',
  },
  {
    name: 'qoiqjwkwq',
    description: 'lorem qwiuoqq JIWWIQJJWS sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/Placeholder.jpg)',
    technology: '<li>Css</li><li>Html</li><li>Html</li>',
    live: 'https://www.naijaloaded.com',
    source: 'https://www.naijaloaded.com',
  },
  {
    name: 'Mr Taj',
    description: 'iqqjwqswq quiwqdhsxsn usahskaljlsja lorem sdjkdss sjdsakjsa sdklsd',
    image: 'url(../image/Icon.png)',
    technology: '<li>Js</li><li>Html</li><li>Html</li>',
    live: 'https://www.goal.com',
    source: 'https://www.goal.com',
  },
];
// End of project information

// Start of including project information inside popup
function toggle(i) {
  document.querySelector('.name').innerText = information[i].name;
  document.getElementById('description').innerText = information[i].description;
  document.querySelector('.technology').innerHTML = information[i].technology;
  document.getElementById('live').href = information[i].live;
  document.getElementById('source').href = information[i].source;
  document.getElementById('image').style.backgroundImage = information[i].image;
}
// End of including project information inside popup

// Start of calling the popup functions
for (let i = 0; i < information.length; i++) {
  buttonClick[i].addEventListener('click', () => {
    toggle(i);

    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
  });
}
// Ending of calling the popup functions

// Start of removing popup
cancelButton.addEventListener('click', () => {
  popup.classList.remove('active');
  document.getElementById('blur').classList.remove('active');
});
// End of removing popup
