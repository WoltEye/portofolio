let hamburger = document.querySelector('.hamburger');
let navBar = document.querySelector('nav');
let navItems = document.querySelector('.nav-items')

hamburger.addEventListener('click', function() {
    navBar.classList.toggle('extendBG');
    navItems.classList.toggle('extend');
    setTimeout(() => { navItems.classList.toggle('fade-in') }, 350);
})