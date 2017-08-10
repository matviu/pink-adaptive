/*---------------main-nav opened/closed--------------*/

var nav = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

nav.classList.remove("main-nav_nojs");

navToggle.onclick = function() {
  if(nav.classList.contains("main-nav_closed")) {
    nav.classList.remove("main-nav_closed");
    nav.classList.add("main-nav_opened")
  } else {
    nav.classList.remove("main-nav_opened");
    nav.classList.add("main-nav_closed")
  }
}
