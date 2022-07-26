const menu = document.querySelector('.menu');
const menuList = document.querySelector('.t-menu');
const close = document.querySelector('.c-button');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuList.classList.toggle('active');
})

close.addEventListener('click', () => {
    menuList.classList.remove('active');
})