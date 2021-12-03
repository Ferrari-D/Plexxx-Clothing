const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');

close.style.display = 'none';

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  close.style.display = 'flex';
});

close.addEventListener('click', () => {
  hamburger.style.display = 'flex';
  close.style.display = 'none';
});