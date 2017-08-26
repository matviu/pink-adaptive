var body = document.querySelector('body');

/*-------main-nav opened/closed-------*/

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

/*-------phone img toggle -------------*/
if(body.classList.contains('index-body')) {

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




/*--------move Responses---------------*/
  responseIndex = 1;
  showCurrentResponse(responseIndex)

    function moveCurrentResponse(n) {
      showCurrentResponse(responseIndex = n);
    }

    function plusCurrentResponse(n) {
      showCurrentResponse(responseIndex +=n);
    }

    function showCurrentResponse(n) {

      var innerContainer = document.querySelector('.responses__inner-container');
      var responsesDots = document.querySelectorAll('.responses__dot');

      if(n < 1) {responseIndex = 3};
      if(n > 3) {responseIndex = 1};

      if(responseIndex == 1) {
       innerContainer.style.transform = "translateX(0)";
       innerContainer.style.transition = "all 1s";
       responsesDots[0].classList.add("responses__dot_current");
       responsesDots[1].classList.remove("responses__dot_current");
       responsesDots[2].classList.remove("responses__dot_current");
      }

      if(responseIndex == 2) {
       innerContainer.style.transform = "translateX(-33.333%)";
       innerContainer.style.transition = "all 1s";
       responsesDots[1].classList.add("responses__dot_current");
       responsesDots[0].classList.remove("responses__dot_current");
       responsesDots[2].classList.remove("responses__dot_current");
      }

      if(responseIndex == 3) {
       innerContainer.style.transform = "translateX(-66.666%)";
       innerContainer.style.transition = "all 1s";
       responsesDots[2].classList.add("responses__dot_current");
       responsesDots[0].classList.remove("responses__dot_current");
       responsesDots[1].classList.remove("responses__dot_current");
      }
  }


  /*--------move Price-------------*/
  priceIndex = 1;
  showCurrentPrice(priceIndex)

    function moveCurrentPrice(n) {
      showCurrentPrice(priceIndex = n);
    }

    function showCurrentPrice(n) {

     var innerContainer = document.querySelector('.price__inner-container');
     var priceDots = document.querySelectorAll('.price__dot');

     if(n < 1) {priceIndex = 3};
     if(n > 3) {priceIndex = 1};

     if(priceIndex == 1) {
        innerContainer.style.transform = "translateX(0)";
        innerContainer.style.transition = "all 1s";
        priceDots[0].classList.add("price__dot_current");
        priceDots[1].classList.remove("price__dot_current");
        priceDots[2].classList.remove("price__dot_current");
       }

       if(priceIndex == 2) {
        innerContainer.style.transform = "translateX(-100%)";
        innerContainer.style.transition = "all 1s";
        priceDots[1].classList.add("price__dot_current");
        priceDots[0].classList.remove("price__dot_current");
        priceDots[2].classList.remove("price__dot_current");
       }

       if(priceIndex == 3) {
        innerContainer.style.transform = "translateX(-200%)";
        innerContainer.style.transition = "all 1s";
        priceDots[2].classList.add("price__dot_current");
        priceDots[0].classList.remove("price__dot_current");
        priceDots[1].classList.remove("price__dot_current");
       }
  }
}


/*-----------bottom logo change-----------*/

var bottomLogo = document.querySelector('.bottom-line__logo');

bottomLogo.onmouseover = function(e) {
  bottomLogo.src = bottomLogo.src.replace("img/bottom-line-logo.png" ,"img/bottom-line-logo_hover.png");
}

bottomLogo.onmouseout = function(e) {
  bottomLogo.src = bottomLogo.src.replace("img/bottom-line-logo_hover.png" ,"img/bottom-line-logo.png");
}

bottomLogo.onmousedown = function(e) {
  bottomLogo.src = bottomLogo.src.replace("img/bottom-line-logo_hover.png" ,"img/bottom-line-logo_active.png");
}

bottomLogo.onmouseup = function(e) {
  bottomLogo.src = bottomLogo.src.replace("img/bottom-line-logo_active.png" ,"img/bottom-line-logo_hover.png");
}


/*------copyright logo change------*/

var copyrightLogo = document.querySelector('.bottom-line__copyright-logo');

copyrightLogo.onmouseover = function(e) {
  copyrightLogo.src = copyrightLogo.src.replace("img/copyright-logo.png" ,"img/copyright-logo_hover.png");
}

copyrightLogo.onmouseout = function(e) {
  copyrightLogo.src = copyrightLogo.src.replace("img/copyright-logo_hover.png" ,"img/copyright-logo.png");
}

copyrightLogo.onmousedown = function(e) {
  copyrightLogo.src = copyrightLogo.src.replace("img/copyright-logo_hover.png" ,"img/copyright-logo_active.png");
}

copyrightLogo.onmouseup = function(e) {
  copyrightLogo.src = copyrightLogo.src.replace("img/copyright-logo_active.png" ,"img/copyright-logo_hover.png");
}

/*--------add-photo slide change--------*/
var area = document.querySelector('.add-photo__slide-wrapper');

var inpCadr = document.querySelector('.cadr_active')
var inpFill = document.querySelector('.fill_active')
var inpContrast = document.querySelector('.contrast_active')

var divCadr = document.querySelector('.settings-slide_cadr');
var divFill = document.querySelector('.settings-slide_fill');
var divContrast = document.querySelector('.settings-slide_contrast');

inpFill.addEventListener('change', function(e) {
  if(inpFill.checked && window.matchMedia("(max-width: 699px)").matches) {
    divFill.classList.add("settings-slide_visible");
    divCadr.classList.remove("settings-slide_visible");
    divContrast.classList.remove("settings-slide_visible");
  };
})

inpCadr.addEventListener('change', function(e) {
  if(inpCadr.checked && window.matchMedia("(max-width: 699px)").matches) {
    divCadr.classList.add("settings-slide_visible");
    divFill.classList.remove("settings-slide_visible");
    divContrast.classList.remove("settings-slide_visible");
  };
})

inpContrast.addEventListener('change', function(e) {
  if(inpContrast.checked && window.matchMedia("(max-width: 699px)").matches) {
    divContrast.classList.add("settings-slide_visible");
    divFill.classList.remove("settings-slide_visible");
    divCadr.classList.remove("settings-slide_visible");
  };
})
