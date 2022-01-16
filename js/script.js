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
