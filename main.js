const h1 = document.querySelector('.banner h1')
const h5 = document.querySelector('.banner h5')
const h6 = document.querySelector('.banner h6')
const ban = document.querySelector('.banner')

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    h1.classList.add('animate__bounceOutUp')
  }, 2000)
  
  setTimeout(() => {
    h6.classList.add('animate__bounceOutRight')
    setTimeout(function() {
      h6.style.display = 'none'
    }, 1000);
  }, 3000)
  
  setTimeout(() => {
    h5.classList.add('animate__bounceOutLeft')
  }, 4000)
  
  setTimeout(() => {
    ban.classList.add('banOut')
  }, 5000)
})
