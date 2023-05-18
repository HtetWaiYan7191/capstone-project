const openMenuBar = document.getElementById('open-btn');
const navWrapper = document.getElementById('nav-wrapper');
const crossBtn = document.getElementById('cross-btn');

openMenuBar.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  navWrapper.classList.toggle('open');
});

crossBtn.addEventListener('click', () => {
  navWrapper.classList.toggle('active');
  navWrapper.classList.toggle('open');
});
