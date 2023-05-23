const button = document.querySelector (".header-icon");
const menuMobile = document.querySelector ('.header-menu');

button.addEventListener('click', toggleMenu);
function toggleMenu () {
menuMobile.classList.toggle('inactive');
}