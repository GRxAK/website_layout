// плавная прокрутка
$(document).ready(function() {
    $('a[href*="#b-form"]').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#b-form').offset().top}, 1000);
        return false;
    });
});

// slider
var b_comments = document.querySelector('.b-block-8'); 
var b_commentsBtn = document.querySelector('.b-btn-box').children;
var b_commentsSliders = document.querySelectorAll('.b-slider');

function b_sliders(block, btn) {
    
    for (var k=0; k < btn.length; k++) {
        Ddd(k, block, btn);
    }
}

function Ddd(k, block, btn) {
    var index = k;
    btn[index].addEventListener('click', function (k) {
        for (var y=0; y < block.length; y++) {
            block[y].classList.remove("active");
            btn[y].classList.remove("visible");
        }
        block[index].classList.add("active");
        btn[index].classList.add("visible");
    });
}

// в лево
function b_sliderLeft(block, btn) {
    var position = 0;
    var positionNext = 0;
    for (var i=0; i < btn.length; i++) {
        if (btn[i].className == "b-btn visible") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (btn.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("active");
    btn[position].classList.remove("visible");
    block[positionNext].classList.add("active");
    btn[positionNext].classList.add("visible");
}
// в право
function b_sliderRight(block, btn) {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < btn.length; i++) {
            if (btn[i].className == "b-btn visible") {
                position = i;
            }
        }
        if (position == (btn.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("active");
        btn[position].classList.remove("visible");
        block[positionNext].classList.add("active");
        btn[positionNext].classList.add("visible");
}
// перелистывания пальцем
function b_touchSlider(box, slider, btn) {

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
            b_sliderRight(slider, btn);
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            b_sliderLeft(slider, btn);
        }
    }
}


b_sliders(b_commentsSliders, b_commentsBtn);
b_touchSlider(b_comments, b_commentsSliders, b_commentsBtn);

// появления анимации при прокрутке до блоков

// B-2
$(document).ready(function(){   
    var $element = $('.b-block-2');
    var counter = 0;
    $element.find('.a-1').css('opacity', '0');
    $element.find('.a-2').css('opacity', '0');
    $element.find('.a-3').css('opacity', '0');
    $element.find('.a-4').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.a-1').addClass("a-pop-up");}, 100);
        setTimeout(function(){$element.find('.a-2').addClass("a-pop-up");}, 900);
        setTimeout(function(){$element.find('.a-3').addClass("a-pop-up");}, 600);
        setTimeout(function(){$element.find('.a-4').addClass("a-pop-up");}, 1200);
        counter = 1;
        }
    });
});


// B-5
$(document).ready(function(){   
    var $element = $('.b-block-5');
    var counter = 0;
    $element.find('.a-1').css('opacity', '0');
    $element.find('.a-2').css('opacity', '0');
    $element.find('.a-3').css('opacity', '0');
    $element.find('.b-center').css('opacity', '0');
    $element.find('.a-4').css('opacity', '0');
    $element.find('.a-5').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.a-1').addClass("a-pop-up");}, 100);
        setTimeout(function(){$element.find('.a-2').addClass("a-pop-up");}, 500);
        setTimeout(function(){$element.find('.a-3').addClass("a-pop-up");}, 900);
        setTimeout(function(){$element.find('.b-center').addClass("a-pop-up");}, 1300);
        setTimeout(function(){$element.find('.a-4').addClass("a-pop-up");}, 1300);
        setTimeout(function(){$element.find('.a-5').addClass("a-pop-up");}, 1500);
        counter = 1;
        }
    });
});

// B-7
$(document).ready(function(){   
    var $element = $('.b-block-7');
    var counter = 0;
    $element.find('.a-1').css('opacity', '0');
    $element.find('.a-2').css('opacity', '0');
    $element.find('.a-3').css('opacity', '0');
    $element.find('.a-4').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 4);
  //Если скролл до начала елемента
  var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.a-1').addClass("a-pop-up");}, 100);
        setTimeout(function(){$element.find('.a-2').addClass("a-pop-up");}, 600);
        setTimeout(function(){$element.find('.a-3').addClass("a-pop-up");}, 800);
        setTimeout(function(){$element.find('.a-4').addClass("a-pop-up");}, 1200);
        counter = 1;
        }
    });
});

// B-9
$(document).ready(function(){   
    var $element = $('.b-block-9');
    var counter = 0;
    $element.find('.a-1').css('opacity', '0');
    $element.find('.a-2').css('opacity', '0');
    $element.find('.a-3').css('opacity', '0');
    $element.find('.a-4').css('opacity', '0');
    $element.find('.a-5').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.a-1').addClass("a-open-up");}, 100);
        setTimeout(function(){$element.find('.a-2').addClass("a-o-2");}, 600);
        setTimeout(function(){$element.find('.a-3').addClass("a-open-up");}, 1100);
        setTimeout(function(){$element.find('.a-4').addClass("a-o-2");}, 1600);
        setTimeout(function(){$element.find('.a-5').addClass("a-open-up");}, 2100);
        counter = 1;
        }
    });
});

if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
    $('html').addClass('ios');
}