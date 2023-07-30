const menuBtn = document.getElementById('menu');
const menuCloseBtn = document.getElementById('close');
const menuOverlay = document.querySelector('.menu__overlay');
menuBtn.addEventListener('click', () => {
  menuOverlay.classList.add('menu__overlay--open');
});
menuCloseBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('menu__overlay--open');
});
