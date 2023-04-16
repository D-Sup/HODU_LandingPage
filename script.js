const emailForm = document.querySelector('.subscribe-form');
const dialog = document.querySelector('dialog');
const nav = document.querySelector('.header-nav')
const open_btn = document.querySelector('.toggle-btn')
const close_btn = document.querySelector('.close-btn')

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  dialog.showModal();
})

open_btn.addEventListener('click', () => {
  nav.style.transform = "translate(0)";
})

close_btn.addEventListener('click', () => {
  console.log('we');
  nav.style.transform = "translate(100%)";
})

window.addEventListener('resize', () =>{
  if(window.innerWidth > 860){
    nav.style.transform = "translate(0)";
  } else if(window.innerWidth < 860) {
    nav.style.transform = "translate(100%)"
  }
})


