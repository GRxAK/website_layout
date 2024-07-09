// плавная прокрутка
$(document).ready(function() {
    $('a[href*="#b-form"]').click(function (evt) {
        evt.preventDefault();
        $("html, body").animate({scrollTop: $('#b-form').offset().top}, 1000);
        return false;
    });
});

// slider
var b_block_5 = document.querySelector('.b-block-5'); 
var b_block_5_Btn = document.querySelector('.b-block-5').querySelectorAll('.b-btn');
var b_block_5_Sliders = document.querySelector('.b-block-5').querySelectorAll('.b-slider');

var b_block_8 = document.querySelector('.b-block-8'); 
var b_block_8_Btn = document.querySelector('.b-block-8').querySelectorAll('.b-btn');
var b_block_8_Sliders = document.querySelector('.b-block-8').querySelectorAll('.b-slider');

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
            btn[y].classList.remove("view");
        }
        block[index].classList.add("active");
        btn[index].classList.add("view");
    });
}

// в лево
function b_sliderLeft(block, btn) {
    var position = 0;
    var positionNext = 0;
    for (var i=0; i < btn.length; i++) {
        if (btn[i].className == "b-btn view") {
            position = i;
        }
    }
    if (position == 0) {
        positionNext = (btn.length - 1);
    } else {
        positionNext = position - 1;
    }
    block[position].classList.remove("active");
    btn[position].classList.remove("view");
    block[positionNext].classList.add("active");
    btn[positionNext].classList.add("view");
}
// в право
function b_sliderRight(block, btn) {
        var position = 0;
        var positionNext = 0;
        for (var i=0; i < btn.length; i++) {
            if (btn[i].className == "b-btn view") {
                position = i;
            }
        }
        if (position == (btn.length - 1)) {
            positionNext = 0;
        } else {
            positionNext = position + 1;
        }
        block[position].classList.remove("active");
        btn[position].classList.remove("view");
        block[positionNext].classList.add("active");
        btn[positionNext].classList.add("view");
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
            if (box == b_block_8) {
                b_sliderRight_2(slider, btn);
            } else {
                b_sliderRight(slider, btn);
            }
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            if (box == b_block_8) {
                b_sliderLeft_2(slider, btn);
            } else {
                b_sliderLeft(slider, btn);
            }
        }
    }
}

function B_slidersClickLeft(block, btnNext, btn) {
    btnNext.on('click', function() {
        b_sliderLeft(block, btn);
    });    
}
function B_slidersClickRight(block, btnNext, btn) {
    btnNext.on('click', function() {
        b_sliderRight(block, btn);
    });    
}

b_sliders(b_block_5_Sliders, b_block_5_Btn);
b_touchSlider(b_block_5, b_block_5_Sliders, b_block_5_Btn);
b_touchSlider(b_block_8, b_block_8_Sliders, b_block_8_Btn);

B_slidersClickRight(b_block_5_Sliders, $('.b-block-5').find('.b-btn'), b_block_5_Btn);


// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------

// переменные для слайдера


var b_position_0 = "position-0";
var b_position_1 = "position-1";
var b_position_2 = "position-2";
var b_position_3 = "position-3";
var b_position_4 = "position-4";
var b_active = "view";

function B_sliders_2(block, btn) {
    
    for (var kk=0; kk < btn.length; kk++) {
        Ddd_2(kk, block, btn);
    }
}

// slider
function Ddd_2(kk, block, btn) {
    // for (let ii=0; ii < btn.length; ii++) {
        var ii = kk;
        btn[ii].addEventListener('click', function () {
            
            var b_numb_0 = ii - 1;
            var b_numb_1 = ii;
            var b_numb_2 = ii + 1;
            var b_numb_3 = ii + 2;
            var b_numb_4 = ii + 3;

            for (var yy=0; yy < block.length; yy++) {
                block[yy].classList.remove("position-0");
                block[yy].classList.remove("position-1");
                block[yy].classList.remove("position-2");
                block[yy].classList.remove("position-3");
                block[yy].classList.remove("position-4");
                btn[yy].classList.remove("view");
            }

            function B_addClass2(item, numb, name) {
                var maxLength = item.length - 1;
                if (numb == item.length) {
                    item[0].classList.add(name);
                } else if (numb < 0) {
                    item[maxLength].classList.add(name);
                } else if (numb == (item.length + 1)) {
                    item[1].classList.add(name);
                } else if (numb == (item.length + 2)) {
                    item[2].classList.add(name);
                } else {
                    item[numb].classList.add(name);
                }
            }

            B_addClass2(block, b_numb_0, b_position_0);
            B_addClass2(block, b_numb_1, b_position_1);
            B_addClass2(block, b_numb_2, b_position_2);
            B_addClass2(block, b_numb_3, b_position_3);
            B_addClass2(block, b_numb_4, b_position_4);
            B_addClass2(btn, b_numb_1, b_active);
        });
    // }
}


B_sliders_2(b_block_8_Sliders, b_block_8_Btn);


// в лево
function b_sliderLeft_2(block, btn) {
    
    function B_addClass(item, name) { 
        var b_lenghtClassList = 0;
        var b_maxItem = item.length - 1;
        for (var yyy=0; yyy < item.length; yyy++) {
            var b_next = yyy - 1;
            b_lenghtClassList = item[yyy].classList.length; 
            for (var iii=0; iii < b_lenghtClassList; iii++) {
                if (item[yyy].classList[iii] == name) {
                    item[yyy].classList.remove(name);
                    if (b_next < 0) {
                        item[b_maxItem].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }   
        }
    }
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
    B_addClass(block, b_position_4);
    B_addClass(btn, b_active);
}
// в право
function b_sliderRight_2(block, btn) {

    function B_addClass(item, name) { 
        var b_lenghtClassList = 0;
        for (var yyyy=0; yyyy < item.length; yyyy++) {
            var b_next = yyyy + 1;
            b_lenghtClassList = item[yyyy].classList.length; 
            for (var iiii=0; iiii < b_lenghtClassList; iiii++) {
                if (item[yyyy].classList[iiii] == name) {
                    item[yyyy].classList.remove(name);
                    if (b_next > (item.length -1)) {
                        item[0].classList.add(name);
                        return;
                    } else {
                        item[b_next].classList.add(name);
                        return;
                    }
                }
            }   
        }
    }
    B_addClass(block, b_position_0);
    B_addClass(block, b_position_1);
    B_addClass(block, b_position_2);
    B_addClass(block, b_position_3);
    B_addClass(block, b_position_4);
    B_addClass(btn, b_active);
}
// нажатие на кнопку в лево/право
var b_btnLeft = document.querySelector('.b-btn-left');
b_btnLeft.addEventListener('click', function() {
    b_sliderLeft_2(b_block_8_Sliders, b_block_8_Btn);
});
var b_btnRight = document.querySelector('.b-btn-right');
b_btnRight.addEventListener('click', function() {
    b_sliderRight_2(b_block_8_Sliders, b_block_8_Btn);
});

// --------------------------------------------------
// --------------------------------------------------
// Прокрутка до блоков

// B-1
$(document).ready(function(){
    var $element = $('#b-block-1');
    $element.find('.s1').css('opacity', '0');
    $element.find('.s2').css('opacity', '0');
    $element.find('.s3').css('opacity', '0');

    setTimeout(function(){$element.find('.s1').addClass("a-falls");}, 100);
    setTimeout(function(){$element.find('.s2').addClass("a-falls");}, 600);
    setTimeout(function(){$element.find('.s3').addClass("a-falls");}, 1100);
});

// B-2
$(document).ready(function(){   
    var $element = $('.b-block-2');
    var counter = 0;
    $element.find('.b-img-2').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top;
 
    if (scroll > offset && counter == 0) {
       
        setTimeout(function(){$element.find('.b-img-2').addClass("a-falls");}, 100);
        counter = 1;
        }
    });
});




// B-6
$(document).ready(function(){   
    var $element = $('.b-block-6');
    var counter = 0;
    $element.find('.b-doc').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top;
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.b-doc').addClass("a-o-2");}, 100);
        
        counter = 1;
        }
    });
});

// B-7
$(document).ready(function(){   
    var $element = $('.b-block-7');
    var counter = 0;
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top;
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.p1').addClass("p90");}, 100);
        setTimeout(function(){$element.find('.p2').addClass("p94");}, 700);
        setTimeout(function(){$element.find('.p3').addClass("p87");}, 1300);
        setTimeout(function(){$element.find('.p4').addClass("p92");}, 1900);
        setTimeout(function(){$element.find('.p5').addClass("p96");}, 2500);
        counter = 1;
        }
    });
});



// B-10
$(document).ready(function(){   
    var $element = $('.b-block-10');
    var counter = 0;
    $element.find('.s1').css('opacity', '0');
    $element.find('.s2').css('opacity', '0');
    $element.find('.s3').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top;
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.s1').addClass("a-o-2");}, 100);
        setTimeout(function(){$element.find('.s2').addClass("a-o-2");}, 700);
        setTimeout(function(){$element.find('.s3').addClass("a-o-2");}, 1300);
        counter = 1;
        }
    });
});


// B-11
$(document).ready(function(){   
    var $element = $('.b-block-11');
    var counter = 0;
    $element.find('.s1').css('opacity', '0');
    $element.find('.s2').css('opacity', '0');
    $element.find('.s3').css('opacity', '0');
$(window).scroll(function() {
  var scroll = $(window).scrollTop()  + ($(window).height() / 2);
  //Если скролл до начала елемента
  var offset = $element.offset().top;
 
    if (scroll > offset && counter == 0) {
        setTimeout(function(){$element.find('.s1').addClass("a-falls");}, 100);
        setTimeout(function(){$element.find('.s2').addClass("a-falls");}, 600);
        setTimeout(function(){$element.find('.s3').addClass("a-falls");}, 1100);
        counter = 1;
        }
    });
});

// --------------------------------------------------
$(window).scroll(function () {
    scrolled = window.pageYOffset;
    

    // смешение фона паки при прокрутке в следующих блоках:
    $('#b-block-1').find('.b-bg-2').css({
        'transform': 'translate(0px, -' + (scrolled / 50) + '%)'
    });
    $('#b-block-1').find('.b-bg-3').css({
        'transform': 'translate(-' + (scrolled / 4) + '%, 0)'
    });

    scrolled2 = scrolled - ($('.b-block-4').offset().top) + 25;
    $('.b-block-4').find('.b-bg-1').css({
        'transform': 'translate(0px, -' + (scrolled2 / 200) + '%)'
    });
    $('.b-block-4').find('.b-bg-2').css({
        'transform': 'translate(-' + (scrolled2 / 90) + '%, 0)'
    });
    $('.b-block-4').find('.b-bg-3').css({
        'transform': 'translate(' + (scrolled2 / 90) + '%, 0)'
    });

    scrolled3 = scrolled - ($('.b-block-6').offset().top) + 50;
    $('.b-block-6').find('.b-bg-1').css({
        'transform': 'translate(-' + (scrolled3 / 120) + '%, 0)'
    });
    $('.b-block-6').find('.b-bg-2').css({
        'transform': 'translate(' + (scrolled3 / 120) + '%, 0)'
    });

    scrolled4 = scrolled - ($('.b-block-7').offset().top) + 200;
    $('.b-block-7').find('.b-bg-1').css({
        'transform': 'translate(0px, -' + (scrolled4 / 250) + '%)'
    });
    $('.b-block-7').find('.b-bg-2').css({
        'transform': 'translate(-' + (scrolled4 / 140) + '%, 0)'
    });
    $('.b-block-7').find('.b-bg-3').css({
        'transform': 'translate(' + (scrolled4 / 140) + '%, 0)'
    });

    scrolled5 = scrolled - ($('.b-block-10').offset().top) + 220;
    $('.b-block-10').find('.b-bg-1').css({
        'transform': 'translate(0px, ' + (scrolled5 / 40) + '%)'
    });
    $('.b-block-10').find('.b-bg-2').css({
        'transform': 'translate(-' + (scrolled5 / 20) + '%, 0)'
    });

    scrolled6 = scrolled - ($('.b-block-11').offset().top) + 250;
    $('.b-block-11').find('.b-bg-2').css({
        'transform': 'translate(0px, ' + (scrolled6 / 40) + '%)'
    });
    $('.b-block-11').find('.b-bg-3').css({
        'transform': 'translate(-' + (scrolled6 / 4) + '%, 0)'
    });

});