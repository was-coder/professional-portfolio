let mobileMenu = document.getElementById("hamburger-div");
let mobileMenuCancel = document.getElementById("cancel-hamburger");
mobileMenu.addEventListener("click", ()=>{document.querySelector(".mobile-div").classList.add('show')});
mobileMenuCancel.addEventListener("click", ()=>{document.querySelector(".mobile-div").classList.remove('show')});