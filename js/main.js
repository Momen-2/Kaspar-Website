const getElement = (selector) => {
  const element = document.querySelector(selector)
  
  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

// const links = getElement('.nav-links')
// const navBtnDOM = getElement('.nav-button')
  
// navBtnDOM.addEventListener('click', () => {
//   links.classList.toggle('show-links')
// })

const mybutton = document.getElementById("scrollToUpButton");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const loader = document.querySelector(".pre-loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

const date = document.getElementById('date');
const currentYear = new Date().getFullYear()
date.textContent = currentYear