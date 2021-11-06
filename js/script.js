let mobileMenu = document.getElementById('hamburger-div');
let mobileMenuCancel = document.getElementById('cancel-hamburger');
let mobileMenuCancel1 = document.getElementById('cancel-butt1');
let mobileMenuCancel2 = document.getElementById('cancel-butt2');
let mobileMenuCancel3 = document.getElementById('cancel-butt3');

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
