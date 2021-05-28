const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar');
const closeMenuButton = document.querySelector('.close-btn');

const toggleMenu = (event) => {
  menu.classList.toggle('is-open');
};

menuBtn.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);
