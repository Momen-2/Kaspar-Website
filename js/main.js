const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const mybutton = document.getElementById("scrollToUpButton");
window.onscroll = function () {
  scrollFunction();
};
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

const loader = document.querySelector(".pre-loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disppear");
}

var modal_one = document.getElementById("myModalOne");
var button_one = document.getElementById("myButtonOne");
var span_one = document.getElementsByClassName("close-one")[0];
button_one.onclick = function () {
  modal_one.style.display = "block";
};
span_one.onclick = function () {
  modal_one.style.display = "none";
};

var modal_two = document.getElementById("myModalTwo");
var button_two = document.getElementById("myButtonTwo");
var span_two = document.getElementsByClassName("close-two")[0];
button_two.onclick = function () {
  modal_two.style.display = "block";
};
span_two.onclick = function () {
  modal_two.style.display = "none";
};

var modal_three = document.getElementById("myModalThree");
var button_three = document.getElementById("myButtonThree");
var span_three = document.getElementsByClassName("close-three")[0];
button_three.onclick = function () {
  modal_three.style.display = "block";
};
span_three.onclick = function () {
  modal_three.style.display = "none";
};

const toggles = document.querySelectorAll(".q-and-a-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

let slideIndexOne = 1;
showSlidesOne(slideIndexOne);
function plusSlidesOne(n) {
  showSlidesOne((slideIndexOne += n));
}
function currentSlideOne(n) {
  showSlidesOne((slideIndexOne = n));
}
function showSlidesOne(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesOne");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexOne = 1;
  }
  if (n < 1) {
    slideIndexOne = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexOne - 1].style.display = "block";
  dots[slideIndexOne - 1].className += " active";
}

let slideIndexTwo = 1;
showSlidesTwo(slideIndexTwo);
function plusSlidesTwo(n) {
  showSlidesTwo((slideIndexTwo += n));
}
function currentSlideTwo(n) {
  showSlidesTwo((slideIndexTwo = n));
}
function showSlidesTwo(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesTwo");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndexTwo = 1;
  }
  if (n < 1) {
    slideIndexTwo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexTwo - 1].style.display = "block";
  dots[slideIndexTwo - 1].className += " active";
}
