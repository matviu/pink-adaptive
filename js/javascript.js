var body = document.querySelector('body');

/*-------main-nav opened/closed-------*/
(function(){

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

})();

/*-------phone img toggle -------------*/
(function(){

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
  }

})();

/*--------move Responses---------------*/
(function(){

  if(body.classList.contains("index-body")) {

    responseIndex = 1;
    showCurrentResponse(responseIndex)

    var dots = document.querySelectorAll('.responses__dot');
    var btnPrev = document.querySelector('.responses__prev');
    var btnNext = document.querySelector('.responses__next');

    dots[0].onclick = function() {
      showCurrentResponse(responseIndex = 1);
    };
    dots[1].onclick = function() {
      showCurrentResponse(responseIndex = 2);
    };
    dots[2].onclick = function() {
      showCurrentResponse(responseIndex = 3);
    };

    btnPrev.onclick = function() {
      showCurrentResponse(responseIndex -= 1)
    };

    btnNext.onclick = function() {
      showCurrentResponse(responseIndex += 1)
    };

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
  }

})();

  /*--------move Price-------------*/
(function(){

  if(body.classList.contains("index-body")) {

    priceIndex = 1;
    showCurrentPrice(priceIndex);

    var dots = document.querySelectorAll('.price__dot');

    dots[0].onclick = function() {
      showCurrentPrice(1);
    }

    dots[1].onclick = function() {
      showCurrentPrice(2);
    }

    dots[2].onclick = function() {
      showCurrentPrice(3);
    }

    function showCurrentPrice(priceIndex) {

     var innerContainer = document.querySelector('.price__inner-container');
     var priceDots = document.querySelectorAll('.price__dot');

     if(priceIndex < 1) {priceIndex = 3};
     if(priceIndex > 3) {priceIndex = 1};

     if(priceIndex == 1) {
        innerContainer.style.transform = "translateX(0)";
        innerContainer.style.transition = "transform 1s";
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

})();

/*-----------bottom logo change-----------*/

var bottomLogo = document.querySelector('.bottom-line__logo');

bottomLogo.onmouseover = function() {
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

/*--------add-photo slide show--------*/
if(body.classList.contains("photo-body")) {

  var area = document.querySelector('.add-photo__slide-wrapper');

  var inpCadr = document.querySelector('.cadr_active');
  var inpFill = document.querySelector('.fill_active');
  var inpContrast = document.querySelector('.contrast_active');

  var divCadr = document.querySelector('.settings-slide_cadr');
  var divFill = document.querySelector('.settings-slide_fill');
  var divContrast = document.querySelector('.settings-slide_contrast');

  inpFill.addEventListener('change', function(e) {
    if(inpFill.checked && window.matchMedia("(max-width: 699px)").matches) {
      divFill.classList.add("settings-slide_visible");
      divCadr.classList.remove("settings-slide_visible");
      divContrast.classList.remove("settings-slide_visible");
    };
  });

  inpCadr.addEventListener('change', function(e) {
    if(inpCadr.checked && window.matchMedia("(max-width: 699px)").matches) {
      divCadr.classList.add("settings-slide_visible");
      divFill.classList.remove("settings-slide_visible");
      divContrast.classList.remove("settings-slide_visible");
    };
  });

  inpContrast.addEventListener('change', function(e) {
    if(inpContrast.checked && window.matchMedia("(max-width: 699px)").matches) {
      divContrast.classList.add("settings-slide_visible");
      divFill.classList.remove("settings-slide_visible");
      divCadr.classList.remove("settings-slide_visible");
    };
  });
}


/*-------likes on photos---------*/

(function() {

  if(body.classList.contains("photo-body")) {

    var photosSection = document.querySelector('.photos');

    photosSection.onclick = function (event) {
      var target = event.target;

      if(target.className != 'photos__like-btn') return;

      var likesWrapper = target.nextElementSibling;
      var likesDisplay = likesWrapper.querySelector('.photos__likes-count');

      var likesCounter = +likesDisplay.innerHTML;

      likesDisplay.innerHTML = likesCounter + 1;
    }
  }

}());

/*--sliders move (all - with event.target)--*/

(function(){
  if(body.classList.contains("photo-body")) {

    var parent = document.querySelector('.add-photo__slide-wrapper');


      parent.onmousedown = function(e) {

        var target = event.target;

        if(! (target.classList.contains('settings-slider')) ) return;

        var line = target.parentNode;
        var dot = target;

        var lineCoord = getCoord(line);
        var dotCoord = getCoord(dot);
        var shiftXleft = e.pageX - dotCoord.left;
        var shiftXright = dotCoord.right - e.pageX;

        document.onmousemove = function(e) {

          var left = e.pageX - lineCoord.left - shiftXleft;

          if(left < 1) {
            left = 0;
          }

          var right = lineCoord.right - e.pageX - shiftXright;

          if(right < 1) {
            left = lineCoord.right - lineCoord.left - dot.offsetWidth;
          }

          dot.style.left = left + 'px';

          var img = document.querySelector('.add-photo__photo');

          if(target.classList.contains('settings-slider_contrast')) {
            var percent = (left / line.offsetWidth) * 100;
            changeContrast(img, percent);
          }

          if(target.classList.contains('settings-slider_fill')) {

            var percent = (left / line.offsetWidth) * 100;
            changeFill(img, percent);
          }

          if(target.classList.contains('settings-slider_cadr')) {

            var multiplier = (left / line.offsetWidth) + 1;
            changeCadr(img, multiplier);
          }

        };

        document.onmouseup = function() {
          document.onmouseup = document.onmousemove = null;
        }

      };

      parent.addEventListener("touchstart", function(e) {

        var target = event.changedTouches[0].target;

        if(! (target.classList.contains('settings-slider')) ) return;

        var line = target.parentNode;
        var dot = target;

        var lineCoord = getCoord(line);
        var dotCoord = getCoord(dot);
        var shiftXleft = e.changedTouches[0].pageX - dotCoord.left;
        var shiftXright = dotCoord.right - e.changedTouches[0].pageX;

        document.addEventListener("touchmove", function(e) {

          var left = e.changedTouches[0].pageX - lineCoord.left - shiftXleft;

          if(left < 1) {
            left = 0;
          }

          var right = lineCoord.right - e.changedTouches[0].pageX - shiftXright;

          if(right < 1) {
            left = lineCoord.right - lineCoord.left - dot.offsetWidth;
          }

          dot.style.left = left + 'px';

          var img = document.querySelector('.add-photo__photo');

          if(target.classList.contains('settings-slider_contrast')) {
            var percent = (left / line.offsetWidth) * 100;
            changeContrast(img, percent);
          }

          if(target.classList.contains('settings-slider_fill')) {

            var percent = (left / line.offsetWidth) * 100;
            changeFill(img, percent);
          }

          if(target.classList.contains('settings-slider_cadr')) {

            var multiplier = (left / line.offsetWidth) + 1;
            changeCadr(img, multiplier);
          }

        });

        document.onmouseup = function() {
          document.onmouseup = document.onmousemove = null;
        }

      });

      function getCoord(elem) {
        var box = elem.getBoundingClientRect();

        return {
          left: box.left + pageXOffset,
          top: box.top + pageYOffset,
          right: box.right + pageXOffset
        };

      };

      function changeContrast(img, percent) {
        img.style.filter = 'contrast(' + percent +'%)';
      }

      function changeFill(img, percent) {
        img.style.filter = 'saturate(' + percent +'%)';
      }

      function changeCadr(img, multiplier) {
        img.style.transform = 'scale(' + multiplier +')';
      }
    };

})();


// (function(){
//
//   window.addEventListener("touchstart", function(e) {
//     console.log(e.changedTouches[0].target);
//   });
//
// })();
