const menu = document.querySelector('.menu');
const menuList = document.querySelector('.t-menu');
const close = document.querySelector('.c-button');
const lists = document.querySelector('.tul');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuList.classList.toggle('active');
});

close.addEventListener('click', () => {
  menuList.classList.remove('active');
});

lists.addEventListener('click', () => {
  menuList.classList.remove('active');
});