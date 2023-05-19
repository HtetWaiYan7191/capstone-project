const openMenuBar = document.getElementById('open-btn');
const navWrapper = document.getElementById('nav-wrapper');
const crossBtn = document.getElementById('cross-btn');
const navLinks = document.querySelectorAll('.nav-items li');

openMenuBar.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  navWrapper.classList.toggle('open');
});

crossBtn.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  navWrapper.classList.toggle('open');
});

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    navWrapper.classList.toggle('active');
    navWrapper.classList.toggle('open');
  });
});
