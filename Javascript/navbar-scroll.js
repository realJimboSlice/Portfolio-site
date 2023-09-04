var prevScrollpos = window.scrollY;
var navbar = document.getElementById("navbar");
var navbarHeight = navbar.offsetHeight;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-" + navbarHeight + "px";
  }
  prevScrollpos = currentScrollPos;
};
