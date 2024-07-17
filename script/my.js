var w = document.getElementById("nav-a1");
w.addEventListener("click", click);
function click() {
  this.style.borderBottom = "2px solid #4DA5F6";
}
var w = document.getElementById("nav-a2");
w.addEventListener("click", click);
function click() {
  this.style.borderBottom = "2px solid #4DA5F6";
}
var w = document.getElementById("nav-a3");
w.addEventListener("click", click);
function click() {
  this.style.borderBottom = "2px solid #4DA5F6";
}
var w = document.getElementById("nav-a4");
w.addEventListener("click", click);
function click() {
  this.style.borderBottom = "2px solid #4DA5F6";
}
var w = document.getElementById("nav-a5");
w.addEventListener("click", click);
function click() {
  this.style.borderBottom = "2px solid #4DA5F6";
}

function myFunction(y) {
  if (y.matches) {
    // If media query matches
    document.getElementById("img-hero").style.marginTop = "370px";
  } else {
    document.getElementById("img-hero").style.marginTop = "339px";
  }
}

var y = window.matchMedia("(max-width: 768px)");
myFunction(y); // Call listener function at run time
y.addListener(myFunction); // Attach listener function on state changes

// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container .navbar-nav .nav-link");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };
