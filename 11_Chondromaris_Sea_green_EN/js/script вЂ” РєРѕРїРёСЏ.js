// 'use strict'

// слайдер
function B_slidersLeft (block, numb) {
    var position = 0;
    var positionNext = 0;
    for (var i=0; i < block.length; i++) {
        if (block[i].className == "b-slider b-active") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (block.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("b-active");
    block[positionNext].classList.add("b-active");
    numb.text(block[positionNext].dataset.slider);
}
function B_slidersRight (block, numb) {
    var position2 = 0;
    var positionNext = 0;
    for (var y=0; y < block.length; y++) {
        if (block[y].className == "b-slider b-active") {
            position2 = y;
        }
    }
    if (position2 == (block.length - 1)) {
        positionNext2 = 0;
    } else {
        positionNext2 = position2 + 1;
    }
    block[position2].classList.remove("b-active");
    block[positionNext2].classList.add("b-active");
    numb.text(block[positionNext2].dataset.slider);
}


function B_slidersClickLeft(block, btn, numb) {
  btn.on('click', function() {
      B_slidersLeft(block, numb);
  });    
}
function B_slidersClickRight(block, btn, numb) {
  btn.on('click', function() {
      B_slidersRight(block, numb);
  });    
}

// перелистывания пальцем
function B_touchSlider(box, slider, numb) {

  var touchStartX = null; //Точка начала касания
  var touchPositionX = null; //Текущая позиция
  const sensitivity = 50; // Чувствительность

  //Перехватываем события
  box.addEventListener("touchstart", function (e) {TouchStart(e)}); //Начало касания
  box.addEventListener("touchmove", function (e) {TouchMove(e)}); //Движение пальцем по экрану
  box.addEventListener("touchend", function (e) {TouchEnd(e)}); //Пользователь отпустил экран

  function TouchStart(e) {
      touchPositionX = null;
      //Получаем текущую позицию касания
      touchStartX = e.changedTouches[0].pageX;
  }

  function TouchMove(e) {
      //Получаем новую позицию
      touchPositionX = e.changedTouches[0].pageX;
  }

  function TouchEnd(e) {
      if ((touchPositionX < (touchStartX - sensitivity )) && (touchPositionX != null)) {
          B_slidersRight(slider, numb);
      } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
          B_slidersLeft(slider, numb);
      }
  }

}
// 
var box1 = document.querySelector('#s-slider-1');
var box2 = document.querySelector('#s-slider-2');
var box3 = document.querySelector('#s-slider-3');
var box4 = document.querySelector('.b-comments-box');
// записывает кол-во слайдов
$('#s-slider-1').find('.b-slider-numb-all').text($('#s-slider-1').find('.b-slider').length);
$('#s-slider-2').find('.b-slider-numb-all').text($('#s-slider-2').find('.b-slider').length);
$('#s-slider-3').find('.b-slider-numb-all').text($('#s-slider-3').find('.b-slider').length);
// запуск слайдов
B_slidersClickLeft($('#s-slider-1').find('.b-slider'), $('#s-slider-1').find('.b-left'), $('#s-slider-1').find('.b-slider-numb-current'));
B_slidersClickRight($('#s-slider-1').find('.b-slider'), $('#s-slider-1').find('.b-right'), $('#s-slider-1').find('.b-slider-numb-current'));
B_touchSlider(box1, $('#s-slider-1').find('.b-slider'), $('#s-slider-1').find('.b-slider-numb-current'));

B_slidersClickLeft($('#s-slider-2').find('.b-slider'), $('#s-slider-2').find('.b-left'), $('#s-slider-2').find('.b-slider-numb-current'));
B_slidersClickRight($('#s-slider-2').find('.b-slider'), $('#s-slider-2').find('.b-right'), $('#s-slider-2').find('.b-slider-numb-current'));
B_touchSlider(box2, $('#s-slider-2').find('.b-slider'), $('#s-slider-2').find('.b-slider-numb-current'));

B_slidersClickLeft($('#s-slider-3').find('.b-slider'), $('#s-slider-3').find('.b-left'), $('#s-slider-3').find('.b-slider-numb-current'));
B_slidersClickRight($('#s-slider-3').find('.b-slider'), $('#s-slider-3').find('.b-right'), $('#s-slider-3').find('.b-slider-numb-current'));
B_touchSlider(box3, $('#s-slider-3').find('.b-slider'), $('#s-slider-3').find('.b-slider-numb-current'));

B_slidersClickLeft($('.b-comments-box').find('.b-slider'), $('.b-comments-box').find('.b-left'), $('.b-comments-box').find('.b-comments-numb-current'));
B_slidersClickRight($('.b-comments-box').find('.b-slider'), $('.b-comments-box').find('.b-right'), $('.b-comments-box').find('.b-comments-numb-current'));
B_touchSlider(box4, $('.b-comments-box').find('.b-slider'), $('.b-comments-box').find('.b-comments-numb-current'));

// 
// 
// 

// появления анимации при прокрутке до блоков
// B-1
$(document).ready(function(){   
    var $element = $('.b-block-1');
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-form').css('opacity', '0');
    // 
    $element.find('.b-prod-1').css('opacity', '0');
    $element.find('.b-prod-2').css('opacity', '0');
    $element.find('.b-prod-3').css('opacity', '0');
    $element.find('.b-bg-8').css('opacity', '0');
    $element.find('.b-bg-9').css('opacity', '0');
    $element.find('.b-bg-5').css('opacity', '0');
    $element.find('.b-form-bg').css('opacity', '0');
    // 
    setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
    // 
    setTimeout(function(){$element.find('.b-prod-1').addClass("a-o");}, 400);
    setTimeout(function(){$element.find('.b-prod-2').addClass("a-o");}, 700);
    setTimeout(function(){$element.find('.b-prod-3').addClass("a-o");}, 1000);
    setTimeout(function(){$element.find('.b-bg-8').addClass("a-o");}, 1500);
    setTimeout(function(){$element.find('.b-bg-9').addClass("a-o");}, 1800);
    setTimeout(function(){$element.find('.b-bg-5').addClass("a-o");}, 2100);
    setTimeout(function(){$element.find('.b-form').addClass("a-o");}, 1300);
    setTimeout(function(){$element.find('.b-form-bg').addClass("a-o");}, 2400);
});

// B-2
$(document).ready(function(){   
    var $element = $('.b-block-2');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-head-bg-1').css('opacity', '0');
    $element.find('.b-head-bg-2').css('opacity', '0');
    $element.find('.b-prod').css('opacity', '0');
    $element.find('.b-before-box').css('opacity', '0');
    $element.find('.b-after-box').css('opacity', '0');
    $element.find('.b-middle-bg-1').css('opacity', '0');
    $element.find('.b-middle-bg-2').css('opacity', '0');
    $element.find('.b-box-slider').css('opacity', '0');
    $element.find('.b-bg-3').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-box-slider').addClass("a-o");}, 1000);
        // 
        setTimeout(function(){$element.find('.b-prod').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.b-head-bg-1').addClass("a-o");}, 1400);
        setTimeout(function(){$element.find('.b-head-bg-2').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-before-box').addClass("a-o");}, 1300);
        setTimeout(function(){$element.find('.b-after-box').addClass("a-o");}, 1600);
        setTimeout(function(){$element.find('.b-middle-bg-1').addClass("a-o");}, 2000);
        setTimeout(function(){$element.find('.b-middle-bg-2').addClass("a-o");}, 2400);
        setTimeout(function(){$element.find('.b-bg-3').addClass("a-o");}, 2600);
        counter = 1;
        }
    });
});

// B-3
$(document).ready(function(){   
    var $element = $('.b-block-3');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-head-bg-1').css('opacity', '0');
    $element.find('.b-head-bg-2').css('opacity', '0');
    $element.find('.b-prod').css('opacity', '0');
    $element.find('.b-before-box').css('opacity', '0');
    $element.find('.b-after-box').css('opacity', '0');
    $element.find('.b-middle-bg-1').css('opacity', '0');
    $element.find('.b-middle-bg-2').css('opacity', '0');
    $element.find('.b-box-slider').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-box-slider').addClass("a-o");}, 1000);
        // 
        setTimeout(function(){$element.find('.b-prod').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.b-head-bg-1').addClass("a-o");}, 1400);
        setTimeout(function(){$element.find('.b-head-bg-2').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-before-box').addClass("a-o");}, 1300);
        setTimeout(function(){$element.find('.b-after-box').addClass("a-o");}, 1600);
        setTimeout(function(){$element.find('.b-middle-bg-1').addClass("a-o");}, 2000);
        setTimeout(function(){$element.find('.b-middle-bg-2').addClass("a-o");}, 2400);
        counter = 1;
        }
    });
});

// B-4
$(document).ready(function(){   
    var $element = $('.b-block-4');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-head-bg-1').css('opacity', '0');
    $element.find('.b-head-bg-2').css('opacity', '0');
    $element.find('.b-prod').css('opacity', '0');
    $element.find('.b-before-box').css('opacity', '0');
    $element.find('.b-after-box').css('opacity', '0');
    $element.find('.b-middle-bg-1').css('opacity', '0');
    $element.find('.b-middle-bg-2').css('opacity', '0');
    $element.find('.b-box-slider').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-box-slider').addClass("a-o");}, 1000);
        // 
        setTimeout(function(){$element.find('.b-prod').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.b-head-bg-1').addClass("a-o");}, 1400);
        setTimeout(function(){$element.find('.b-head-bg-2').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-before-box').addClass("a-o");}, 1300);
        setTimeout(function(){$element.find('.b-after-box').addClass("a-o");}, 1600);
        setTimeout(function(){$element.find('.b-middle-bg-1').addClass("a-o");}, 2000);
        setTimeout(function(){$element.find('.b-middle-bg-2').addClass("a-o");}, 2400);
        counter = 1;
        }
    });
});

// B-5
$(document).ready(function(){   
    var $element = $('.b-block-5');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-1').css('opacity', '0');
    $element.find('.b-2').css('opacity', '0');
    $element.find('.b-3').css('opacity', '0');
    $element.find('.b-roleprod-bg-1').css('opacity', '0');
    $element.find('.b-roleprod-bg-2').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-1').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.b-1').find('.b-roleprod-bg-1').addClass("a-o");}, 900);
        setTimeout(function(){$element.find('.b-1').find('.b-roleprod-bg-2').addClass("a-o");}, 1300);
        setTimeout(function(){$element.find('.b-2').addClass("a-o");}, 1000);
        setTimeout(function(){$element.find('.b-2').find('.b-roleprod-bg-1').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-2').find('.b-roleprod-bg-2').addClass("a-o");}, 2100);
        setTimeout(function(){$element.find('.b-3').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-3').find('.b-roleprod-bg-1').addClass("a-o");}, 2500);
        setTimeout(function(){$element.find('.b-3').find('.b-roleprod-bg-2').addClass("a-o");}, 2900);
        counter = 1;
        }
    });
});

// B-6
$(document).ready(function(){   
    var $element = $('.b-block-6');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.b-before-box').css('opacity', '0');
    $element.find('.b-after-box').css('opacity', '0');
    $element.find('.b-prod-1').css('opacity', '0');
    $element.find('.b-prod-2').css('opacity', '0');
    $element.find('.b-prod-3').css('opacity', '0');
    $element.find('.b-prod-bg-1').css('opacity', '0');
    $element.find('.b-prod-bg-2').css('opacity', '0');
    $element.find('.b-form').css('opacity', '0');
    $element.find('.b-form-bg').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-before-box').addClass("a-o");}, 300);
        setTimeout(function(){$element.find('.b-after-box').addClass("a-o");}, 600);
        setTimeout(function(){$element.find('.b-prod-1').addClass("a-o");}, 1000);
        setTimeout(function(){$element.find('.b-prod-2').addClass("a-o");}, 1250);
        setTimeout(function(){$element.find('.b-prod-3').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-prod-bg-1').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-prod-bg-2').addClass("a-o");}, 2400);
        setTimeout(function(){$element.find('.b-form').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-form-bg').addClass("a-o");}, 2100);
        counter = 1;
        }
    });
});

// B-7
$(document).ready(function(){   
    var $element = $('.b-block-7');
    var counter = 0;
    $element.find('.b-h2').css('opacity', '0');
    $element.find('.b-comments-box').css('opacity', '0');
    $element.find('.b-sticker').css('opacity', '0');
    $element.find('.b-comments-bg-1').css('opacity', '0');
    $element.find('.b-comments-bg-4').css('opacity', '0');
    $element.find('.b-comments-bg-5').css('opacity', '0');
    $element.find('.b-comments-bg-2').css('opacity', '0');
    $element.find('.b-comments-bg-3').css('opacity', '0');
    $element.find('.b-comments-bg-6').css('opacity', '0');
    $element.find('.s-3').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-h2').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-comments-box').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.b-sticker').addClass("a-o");}, 1000);
        setTimeout(function(){$element.find('.b-comments-bg-1').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-comments-bg-4').addClass("a-o");}, 1600);
        setTimeout(function(){$element.find('.b-comments-bg-5').addClass("a-o");}, 1800);
        setTimeout(function(){$element.find('.b-comments-bg-2').addClass("a-o");}, 1300);
        setTimeout(function(){$element.find('.b-comments-bg-3').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-comments-bg-6').addClass("a-o");}, 1700);
        counter = 1;
        }
    });
});

// B-8
$(document).ready(function(){   
    var $element = $('.b-block-8');
    var counter = 0;
    $element.find('.b-h2').css('opacity', '0');
    $element.find('.s-1').css('opacity', '0');
    $element.find('.s-2').css('opacity', '0');
    $element.find('.s-3').css('opacity', '0');
    $element.find('.b-bg-3').css('opacity', '0');
    $element.find('.b-bg-4').css('opacity', '0');
    $element.find('.b-bg-5').css('opacity', '0');
    $element.find('.b-step-bg').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-h2').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.b-step-bg').addClass("a-o");}, 2000);
        setTimeout(function(){$element.find('.s-1').addClass("a-o");}, 500);
        setTimeout(function(){$element.find('.s-2').addClass("a-o");}, 1000);
        setTimeout(function(){$element.find('.s-3').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-bg-3').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-bg-4').addClass("a-o");}, 2100);
        setTimeout(function(){$element.find('.b-bg-5').addClass("a-o");}, 2400);
        counter = 1;
        }
    });
});

// B-9
$(document).ready(function(){   
    var $element = $('.b-block-9');
    var counter = 0;
    $element.find('.b-head').css('opacity', '0');
    $element.find('.s-1').css('opacity', '0');
    $element.find('.s-2').css('opacity', '0');
    $element.find('.s-3').css('opacity', '0');
    $element.find('.b-form').css('opacity', '0');
    $element.find('.b-img-bg-1').css('opacity', '0');
    $element.find('.b-img-bg-2').css('opacity', '0');
    $element.find('.b-form-bg').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-head').addClass("a-o");}, 100);
        setTimeout(function(){$element.find('.s-1').addClass("a-o");}, 900);
        setTimeout(function(){$element.find('.s-2').addClass("a-o");}, 800);
        setTimeout(function(){$element.find('.s-3').addClass("a-o");}, 1100);
        setTimeout(function(){$element.find('.b-form').addClass("a-o");}, 1500);
        setTimeout(function(){$element.find('.b-img-bg-1').addClass("a-o");}, 1400);
        setTimeout(function(){$element.find('.b-img-bg-2').addClass("a-o");}, 1700);
        setTimeout(function(){$element.find('.b-form-bg').addClass("a-o");}, 2000);
        counter = 1;
        }
    });
});

// TEST
<!-- Google Analytics clic -->
<script type="text/javascript">
        var button1 = document.getElementsByTagName('button');
        window.dataLayer = window.dataLayer || [];
        button1[0].addEventListener('click', function() {
            ga('send', 'event', 'tlgrm', 'click');
            fbq('track', 'AddToWishlist', {});
        }, false);
</script>