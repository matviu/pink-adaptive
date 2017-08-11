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

/*---------------phone img toggle ------------------------*/

var phoneImg = document.querySelector('#features__mobile');

phoneImg.onclick = function() {
  if(phoneImg.getAttribute('src') == "img/grey.jpg") {
    phoneImg.src = phoneImg.src.replace("img/grey.jpg", "img/pink.jpg");
  } else if (phoneImg.getAttribute('src') == "http://localhost:3000/img/pink.jpg") {
    phoneImg.src = phoneImg.src.replace("img/pink.jpg", "img/pink-smile.jpg");
  }  else {
    phoneImg.setAttribute('src', 'img/grey.jpg');
  }
}

/*---------------move Responses----------------------*/
var innerContainer = document.querySelector('.responses__inner-container');
var responsesDots = document.querySelectorAll('.responses__dot');

function moveCurrentResponse(n) {
  showCurrentResponse(n);
  activeResponseDot(n);
}

function plusCurrentResponse(t) {
  showCurrentResponse(n += t);
}

function showCurrentResponse(n) {

  if(n < 1) {n = 3};
  if(n > 3) {n = 1};

  if(n == 1) {
   innerContainer.style.transform = "translateX(0)";
   innerContainer.style.transition = "all 1s";
  }

  if(n == 2) {
   innerContainer.style.transform = "translateX(-33.333%)";
   innerContainer.style.transition = "all 1s";
  }

  if(n == 3) {
   innerContainer.style.transform = "translateX(-66.666%)";
   innerContainer.style.transition = "all 1s";
  }
 }

 function activeResponseDot(n) {
   if(n == 1) {
     responsesDots[0].classList.add("responses__dot_current");
     responsesDots[1].classList.remove("responses__dot_current");
     responsesDots[2].classList.remove("responses__dot_current");
   }

   if(n == 2) {
     responsesDots[1].classList.add("responses__dot_current");
     responsesDots[0].classList.remove("responses__dot_current");
     responsesDots[2].classList.remove("responses__dot_current");
   }

   if(n == 3) {
     responsesDots[2].classList.add("responses__dot_current");
     responsesDots[0].classList.remove("responses__dot_current");
     responsesDots[1].classList.remove("responses__dot_current");
   }
 }
