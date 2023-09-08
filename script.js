console.log('Tes');

const navToggle = document.querySelector('.nav-toggle')
const navmenu = document.querySelector('.nav-menu')

navToggle.addEventListener('click',() => {
      navmenu.classList.toggle('active')
});