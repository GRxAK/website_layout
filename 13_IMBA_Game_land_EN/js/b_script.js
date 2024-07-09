'use strict'

// открытие модального окна
function ModalMenu() {
    // открыть
    if (!$('.b-menu-btn').hasClass('b-menu-btn-open')) {
        $('.b-menu-btn').addClass('b-menu-btn-open');
        $('.b-all').css('opacity', '0');
        $('.b-nav').addClass('b-nav-close');
        $('.b-header').css('backdrop-filter', 'none');
        $('.b-header').css('background', 'none');
        $('.b-modal-window').css('display', 'block');
    }
    // закрыть
    else if ($('.b-menu-btn').hasClass('b-menu-btn-open')) {
        $('.b-menu-btn').removeClass('b-menu-btn-open');
        $('.b-all').css('opacity', '1');
        $('.b-nav').removeClass('b-nav-close');
        $('.b-header').css('backdrop-filter', '');
        $('.b-header').css('background', 'rgba(1, 204, 101, 0.2)');
        $('.b-modal-window').css('display', 'none');
    }
}
$(document).ready(function() {
    $('.b-menu-btn').click(function (evt) {
        evt.preventDefault();
        ModalMenu();
        return false;
    });
});

// блок 2 сворачивание/разворачивание в мобилке артиклов
function B_ClubOpenArticle(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            // переменные 
            let b_block = document.querySelectorAll('.b-club-article');
            

                // открыть
                if (btn[i].className == "b-arrow b-close") {
                    btn[i].classList.remove('b-close');

                    if ($(window).width() < 992){
                        let b_adres = b_block[i].querySelectorAll('.b-btn-club');
                        for (let z=1; z < b_adres.length; z++) {
                            b_adres[z].style.display = 'none';
                        }
                    }
                    let b_slider = b_block[i].querySelector('.b-club-hidden');
                    b_slider.style.display = 'none';
                }
                // закрыть
                else {
                    btn[i].classList.add('b-close');

                    if ($(window).width() < 992){
                        let b_adres = b_block[i].querySelectorAll('.b-btn-club');
                        for (let z=1; z < b_adres.length; z++) {
                            b_adres[z].style.display = 'flex';
                        }
                    }
                    let b_slider = b_block[i].querySelector('.b-club-hidden');
                    b_slider.style.display = 'block';
                }
        });
    }
}

B_ClubOpenArticle($('.b-club').find('.b-arrow'));



// переменные для слайдера
let b_position_0 = "b-view-0";
let b_position_1 = "b-view-1";
let b_position_2 = "b-view-2";
let b_position_3 = "b-view-3";

// slider
// в лево
function b_sliderLeft(block) {
    
    function B_addClass(item, name) { 
        let b_lenghtClassList = 0;
        let b_maxItem = item.length - 1;
        for (let y=0; y < item.length; y++) {
            let b_next = y - 1;
            b_lenghtClassList = item[y].classList.length; 
            for (let i=0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
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
    if (block.length > 1) {
        B_addClass(block, b_position_1);
    }
    if (block.length > 2) {
        B_addClass(block, b_position_2);
    }
    if (block.length > 3) {
        B_addClass(block, b_position_3);
    }
}
// в право
function b_sliderRight(block) {

    function B_addClass(item, name) { 
        let b_lenghtClassList = 0;
        for (let y=0; y < item.length; y++) {
            let b_next = y + 1;
            b_lenghtClassList = item[y].classList.length; 
            for (let i=0; i < b_lenghtClassList; i++) {
                if (item[y].classList[i] == name) {
                    item[y].classList.remove(name);
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
    if (block.length > 1) {
        B_addClass(block, b_position_1);
    }
    if (block.length > 2) {
        B_addClass(block, b_position_2);
    }
    if (block.length > 3) {
        B_addClass(block, b_position_3);
    }
}
// нажатие на кнопку в лево/право
let b_btnLeft_1 = document.querySelector('#b_s1_left');
b_btnLeft_1.addEventListener('click', ()=> {
    b_sliderLeft(b_slider_1_Slider);
});
let b_btnRight_1 = document.querySelector('#b_s1_right');
b_btnRight_1.addEventListener('click', ()=> {
    b_sliderRight(b_slider_1_Slider);
});


let b_btnLeft_2 = document.querySelector('#b_s2_left');
b_btnLeft_2.addEventListener('click', ()=> {
    b_sliderLeft(b_slider_2_Slider);
});
let b_btnRight_2 = document.querySelector('#b_s2_right');
b_btnRight_2.addEventListener('click', ()=> {
    b_sliderRight(b_slider_2_Slider);
});

// перелистывания пальцем
function B_touchSlider(box, slider) {

    let touchStartX = null; //Точка начала касания
    let touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность

    //Перехватываем события
    box.addEventListener("touchstart", (e)=> {TouchStart(e)}); //Начало касания
    box.addEventListener("touchmove", (e)=> {TouchMove(e)}); //Движение пальцем по экрану
    box.addEventListener("touchend", (e)=> {TouchEnd(e)}); //Пользователь отпустил экран

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
            b_sliderRight(slider);
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            b_sliderLeft(slider);
        }
    }

}
// 
let b_slider_1 = document.querySelector('#s_slider_1');
let b_slider_2 = document.querySelector('#s_slider_2');
let b_slider_1_Slider = b_slider_1.querySelectorAll('.b-slider');
let b_slider_2_Slider = b_slider_2.querySelectorAll('.b-slider');
B_touchSlider(b_slider_1, b_slider_1_Slider);
B_touchSlider(b_slider_2, b_slider_2_Slider);


// Модальное окно слайлера b-slider-open
function B_ClubOpenModalSlider(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let b_block = document.querySelectorAll('.b-slider-open');
            $('.b-club').css("overflow-y", "hidden");
            b_block[i].style.display ='block';
            $('.b-club').css('z-index', '60');
        });
    }
}
B_ClubOpenModalSlider($('.b-sliders-box').find('.b-slider-img'));

function B_ClubCloseModalSlider(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let b_block = document.querySelectorAll('.b-slider-open');
            $('.b-club').css("overflow-y", "scroll");
            b_block[i].style.display ='none';
            $('.b-club').css('z-index', '');
        });
    }
}
B_ClubCloseModalSlider($('.b-slider-open').find('.b-btn-close'));

// сменад слайдов в модальном окре слайдера b-slider-open
function B_LeftModalSlider(btn, box, slider) {
    let b_block = box.querySelectorAll('.b-slider-open');
    let position = 0;
    let positionNext = 0;

    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            b_block[i].style.display ='none';

            position = i;
            if (position == 0) {
                positionNext = (btn.length - 1);
            } else {
                positionNext = position - 1;
            }
            b_block[positionNext].style.display ='block';
            b_sliderLeft(slider);
        });
    }
}
function B_RightModalSlider(btn, box, slider) {
    let b_block = box.querySelectorAll('.b-slider-open');
    let position = 0;
    let positionNext = 0;

    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            b_block[i].style.display ='none';

            position = i;
            if (position == (btn.length - 1)) {
                positionNext = 0;
            } else {
                positionNext = position + 1;
            }
            b_block[positionNext].style.display ='block';
            b_sliderRight(slider);
        });
    }
}
B_LeftModalSlider($('#s_slider_1').find('.b-btn-left'), b_slider_1, b_slider_1_Slider);
B_LeftModalSlider($('#s_slider_2').find('.b-btn-left'), b_slider_2, b_slider_2_Slider);
B_RightModalSlider($('#s_slider_1').find('.b-btn-rigth'), b_slider_1, b_slider_1_Slider);
B_RightModalSlider($('#s_slider_2').find('.b-btn-rigth'), b_slider_2, b_slider_2_Slider);

// перелистывание пальцом слайдов в модальном окне  b-slider-open
let b_nodalBoxSlider_1 = b_slider_1.querySelectorAll('.b-slider-open');
let b_nodalBoxSlider_2 = b_slider_2.querySelectorAll('.b-slider-open');

function B_touchModalSlider(boxTouch, btn_l, btn_r, box, slider) {

    let touchStartX = null; //Точка начала касания
    let touchPositionX = null; //Текущая позиция
    const sensitivity = 50; // Чувствительность
    let numb = 0;

    //Перехватываем события
    for (numb=0; numb < boxTouch.length; numb++) {
        boxTouch[numb].addEventListener("touchstart", (e)=> {TouchStart(e)}); //Начало касания
        boxTouch[numb].addEventListener("touchmove", (e)=> {TouchMove(e)}); //Движение пальцем по экрану
        boxTouch[numb].addEventListener("touchend", (e)=> {TouchEnd(e)}); //Пользователь отпустил экран
    }

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
            B_RightModalSlider(btn_l, box, slider) 
        } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
            B_LeftModalSlider(btn_r, box, slider)
        }
    }

}

B_touchModalSlider(b_nodalBoxSlider_1, $('#s_slider_1').find('.b-btn-left'), $('#s_slider_1').find('.b-btn-rigth'), b_slider_1, b_slider_1_Slider);
B_touchModalSlider(b_nodalBoxSlider_2, $('#s_slider_2').find('.b-btn-left'), $('#s_slider_1').find('.b-btn-rigth'), b_slider_2, b_slider_2_Slider);

// B-3
// блок 3 открытия/закрытие события по клику на него
function B_BlockStyle () {
    let block = document.querySelectorAll('.b-events-item');
    block[0].style.display = 'block';
    block[1].style.display = 'block';
    block[2].style.display = 'block';
}
B_BlockStyle();
function B_EventsOpenWindow(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let blockEvent = document.querySelectorAll('.b-events-modal-item');
            let btnEvent = document.querySelectorAll('.b-events-modal-btn');
            let idEvent = btn[i].dataset.event - 1;
            // открыть
            if (btn[i].style.display == 'block') {
                $('.b-events-window').css('display', 'none');
                $('.b-events-modal').css('display', 'block');
                if ($(window).width() > 1599){
                    $('.b-events-modal').find('.b-left').css('display', 'block');
                }
                blockEvent[idEvent].style.display = 'block';
                btnEvent[idEvent].style.display = 'none';
                $(".b-events").scrollTop($('body').offset().top);
            }
            // закрыть
            else {
                $('.b-events-window').css('display', 'block');
                $('.b-events-modal').css('display', 'none');
                if ($(window).width() > 1599){
                    $('.b-events-modal').find('.b-left').css('display', 'none');
                }
                blockEvent[idEvent].style.display = 'none';
                btnEvent[idEvent].style.display = 'block';
            }
        });
    }
}
B_EventsOpenWindow($('.b-events-item'));

function B_EventsChangeWindow(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let blockEvent = document.querySelectorAll('.b-events-modal-item');
            let btnEvent = document.querySelectorAll('.b-events-modal-btn');
            let idEvent = btn[i].dataset.event - 1;

            for (let y=0; y < blockEvent.length; y++) {
                if (blockEvent[y].style.display == 'block') {
                    blockEvent[y].style.display = 'none';
                    btn[y].style.display = 'block';
                }
            }
            blockEvent[idEvent].style.display = 'block';
            btnEvent[idEvent].style.display = 'none';
        });
    }
}
B_EventsChangeWindow($('.b-events-modal-btn'));



function B_EventsCloseWindow() {
    $('.b-events-modal-arrow').click(function (evt) {
        evt.preventDefault();
        let btnEvent = document.querySelectorAll('.b-events-modal-btn');
        let openBlock = document.querySelectorAll('.b-events-modal-item');
        let idEvent = undefined;
        for (let i=0; i < openBlock.length; i++) {
            if (openBlock[i].style.display == 'block') {
                idEvent = openBlock[i].dataset.event - 1;
            }
        }
        $('.b-events-window').css('display', 'block');
        $('.b-events-modal').css('display', 'none');
        openBlock[idEvent].style.display = 'none';
        btnEvent[idEvent].style.display = 'block';
        if ($(window).width() > 1599){
            $('.b-events-modal').find('.b-left').css('display', 'none');
        }
        return false;
    });
}
B_EventsCloseWindow();

// B-4
// блок 4 открытия/закрытие события по клику на него
function B_BlockNews () {
    $('.b-news-disclosed').css('display', 'none');
    $('.b-news-disclosed-item').css('display', 'none');
}
B_BlockNews();
function B_NewsOpenWindow(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let blockEvent = document.querySelectorAll('.b-news-disclosed-item');
            let idEvent = btn[i].dataset.news - 1;
            // открыть
            if ($('.b-news-disclosed').css('display') == 'none') {
                $('.b-news').css('overflow-y', 'inherit');
                $('.b-news').css('background', '#00140a');
                $('.b-news-prime').css('display', 'none');
                $('.b-news-disclosed').css('display', 'block');
                blockEvent[idEvent].style.display = 'block';
                $(".b-news").scrollTop($('body').offset().top);
            }
            // закрыть
            else {
                $('.b-news').css('overflow-y', 'scroll');
                $('.b-news').css('background', '');
                $('.b-news-prime').css('display', 'block');
                $('.b-news-disclosed').css('display', 'none');
                blockEvent[idEvent].style.display = 'none';
            }
        });
    }
}
B_NewsOpenWindow($('.b-news-right-item'));
B_NewsOpenWindow($('.b-news-left-item'));

function B_NewsCloseWindow() {
    $('.b-news-disclosed-arrow').click(function (evt) {
        evt.preventDefault();
        let openBlock = document.querySelectorAll('.b-news-disclosed-item');
        let idEvent = undefined;
        for (let i=0; i < openBlock.length; i++) {
            if (openBlock[i].style.display == 'block') {
                idEvent = openBlock[i].dataset.news - 1;
            }
        }
        $('.b-news').css('overflow-y', 'scroll');
        $('.b-news-prime').css('display', 'block');
        $('.b-news-disclosed').css('display', 'none');
        $('.b-news-disclosed-item').css('display', 'none');
        openBlock[idEvent].style.display = 'none';
        return false;
    });
}
B_NewsCloseWindow();

function B_NewsLeftWindow(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let position = 0;
            let positionNext = 0;
            let blockEvent = document.querySelectorAll('.b-news-disclosed-item');
            position = i;
            if (position == 0) {
                positionNext = (btn.length - 1);
            } else {
                positionNext = position - 1;
            }
            blockEvent[i].style.display = 'none';
            blockEvent[positionNext].style.display = 'block';
        });
    }
}
B_NewsLeftWindow($('.s-left'));

function B_NewsRightWindow(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let position = 0;
            let positionNext = 0;
            let blockEvent = document.querySelectorAll('.b-news-disclosed-item');
            position = i;
            if (position == (btn.length - 1)) {
                positionNext = 0;
            } else {
                positionNext = position + 1;
            }
            blockEvent[i].style.display = 'none';
            blockEvent[positionNext].style.display = 'block';
        });
    }
}
B_NewsRightWindow($('.s-right'));

// открытия картинки в блоке news
function B_NewsOpenImg(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            console.log('fdsfdsfds')
            let blckImg = document.querySelectorAll('.b-news-disclosed-open');
            blckImg[i].style.display = 'flex';
            $('.b-header').css('display', 'none');
        });
    }
}
B_NewsOpenImg($('.b-news-disclosed-right'));
// закрытие картинки в блоке news
function B_NewsCloseImg(btn) {
    for (let i=0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            let blckImg = document.querySelectorAll('.b-news-disclosed-open');
            blckImg[i].style.display = 'none';
            $('.b-header').css('display', 'block');
        });
    }
}
B_NewsCloseImg($('.b-news-close'));





// Работа блоков в видемом окне
    // делаем не видемоми блоки
    $('#block-2').css('display', 'none');
    $('#block-3').css('display', 'none');
    $('#block-4').css('display', 'none');
    $('#block-5').css('display', 'none');
    $('#block-6').css('display', 'none');
    $('#block-7').css('display', 'none');
// 

// скрол в первом блоке

function B_ScrillClub() {
    if ($('.b-zero').css("display") != "none") {
        $("html, body").scrollTop($('body').offset().top);
        $('.b-club').addClass("a-anim-1");
        $('.b-all-conteiner').css("position", "relative");
        $('.b-zero').css("display", "none");
    }
}


$(document).ready(function(){   
    var $element = $('.b-box-anim');
    let counter = 0;
    $('.b-all-conteiner').css("position", "fixed");
$(window).scroll(function() {
    var scroll = $(window).scrollTop()  + ($(window).height() - 200);
    //Если скролл до начала елемента
    var offset = $element.offset().top
    
        if (scroll > offset && counter == 0) {
            B_ScrillClub();
            counter = 1;
            }
        });
});

// переход на block-1
$(document).ready(function() {
    $('.link-1').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-1').css('display') == 'block') {
        }
        else  {
            B_ScrillClub();
            $('#block-2').css('display', 'none');
            $('#block-3').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-5').css('display', 'none');
            $('#block-6').css('display', 'none');
            $('#block-7').css('display', 'none');
            $('#block-1').css('display', 'block');
        }
        return false;
    });
});
// переход на block-2
$(document).ready(function() {
    $('.link-2').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        $('#block-1').css('display', 'none');
        $('#block-3').css('display', 'none');
        $('#block-4').css('display', 'none');
        $('#block-5').css('display', 'none');
        $('#block-6').css('display', 'none');
        $('#block-7').css('display', 'none');
        $('#block-2').css('display', 'block');
        if ($('.b-events-modal').css('display') == 'block') {
            let btnEvent = document.querySelectorAll('.b-events-modal-btn');
            let openBlock = document.querySelectorAll('.b-events-modal-item');
            let idEvent = undefined;
            for (let i=0; i < openBlock.length; i++) {
                if (openBlock[i].style.display == 'block') {
                    idEvent = openBlock[i].dataset.event - 1;
                }
            }
            $('.b-events-window').css('display', 'block');
            $('.b-events-modal').css('display', 'none');
            openBlock[idEvent].style.display = 'none';
            btnEvent[idEvent].style.display = 'block';
            if ($(window).width() > 1599){
                $('.b-events-modal').find('.b-left').css('display', 'none');
            }
        }
        $(".b-events").scrollTop($('body').offset().top);
        return false;
    });
});
// переход на block-3
$(document).ready(function() {
    $('.link-3').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-3').css('display') == 'block') {
        }
        else  {
            $('#block-1').css('display', 'none');
            $('#block-2').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-5').css('display', 'none');
            $('#block-6').css('display', 'none');
            $('#block-7').css('display', 'none');
            $('#block-3').css('display', 'block');
        }
        return false;
    });
});
// переход на block-4
$(document).ready(function() {
    $('.link-4').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        $('#block-1').css('display', 'none');
        $('#block-2').css('display', 'none');
        $('#block-3').css('display', 'none');
        $('#block-5').css('display', 'none');
        $('#block-6').css('display', 'none');
        $('#block-7').css('display', 'none');
        $('#block-4').css('display', 'block');
        if ($('.b-news-disclosed').css('display') == 'block') {
            let openBlock = document.querySelectorAll('.b-news-disclosed-item');
            let idEvent = undefined;
            for (let i=0; i < openBlock.length; i++) {
                if (openBlock[i].style.display == 'block') {
                    idEvent = openBlock[i].dataset.news - 1;
                }
            }
            $('.b-news').css('overflow-y', 'scroll');
            $('.b-news-prime').css('display', 'block');
            $('.b-news-disclosed').css('display', 'none');
            $('.b-news-disclosed-item').css('display', 'none');
            openBlock[idEvent].style.display = 'none';
        }
        $(".b-news").scrollTop($('body').offset().top);
        return false;
    });
});
// переход на block-5
$(document).ready(function() {
    $('.link-5').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-5').css('display') == 'block') {
        }
        else  {
            $('#block-1').css('display', 'none');
            $('#block-2').css('display', 'none');
            $('#block-3').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-6').css('display', 'none');
            $('#block-7').css('display', 'none');
            $('#block-5').css('display', 'block');
        }
        return false;
    });
});
// переход на block-5
$(document).ready(function() {
    $('.link-5').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-5').css('display') == 'block') {
        }
        else  {
            $('#block-1').css('display', 'none');
            $('#block-2').css('display', 'none');
            $('#block-3').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-6').css('display', 'none');
            $('#block-7').css('display', 'none');
            $('#block-5').css('display', 'block');
        }
        return false;
    });
});

// переход на block-6
$(document).ready(function() {
    $('.link-6').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-6').css('display') == 'block') {
        }
        else  {
            $('#block-1').css('display', 'none');
            $('#block-2').css('display', 'none');
            $('#block-3').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-5').css('display', 'none');
            $('#block-7').css('display', 'none');
            $('#block-6').css('display', 'block');
        }
        return false;
    });
});

// переход на block-7
$(document).ready(function() {
    $('.link-7').click(function (evt) {
        evt.preventDefault();
        if ($('.b-modal-window').css('display') == 'block') {
            ModalMenu();
        }
        if ($('#block-7').css('display') == 'block') {
        }
        else  {
            $('#block-1').css('display', 'none');
            $('#block-2').css('display', 'none');
            $('#block-3').css('display', 'none');
            $('#block-4').css('display', 'none');
            $('#block-5').css('display', 'none');
            $('#block-6').css('display', 'none');
            $('#block-7').css('display', 'block');
        }
        return false;
    });
});



// Теги
// сортировка по тегам

function B_TagClick(btn, block) {
    let indexTag = undefined;
    for (let i=0; i < btn.length; i++) {
            btn[i].addEventListener('click', () => {
                indexTag = btn[i].dataset.tag;
                let btnActiv = 0;
                for (let y=0; y < btn[i].classList.length; y++) {
                    if (btn[i].classList[y] == ('event_' + indexTag)) {
                        btnActiv = 1;
                    }
                }
                if (btnActiv == 0) {
                    btn[i].classList.add('event_' + indexTag);
                }
                if (btnActiv == 1) {
                    btn[i].classList.remove('event_' + indexTag);
                }

                B_TagActiveIndex (btn, block);
        });
    }
}

// запоменает какие теги включены и если не один то же запоминает (0 не выбран)
function B_TagActiveIndex (btn, block) {    
    let active = {
        event_1: 0,
        event_2: 0,
        event_3: 0,
        event_4: 0,
        event_5: 0,
        all_event: 0
    };
    // btn
    for (let i=0; i < btn.length; i++) {
        for (let y=0; y < btn[i].classList.length; y++) {
            if (btn[i].classList[y] == 'event_1') {
                active.event_1 = 1;
            }
        }
        for (let y=0; y < btn[i].classList.length; y++) {
            if (btn[i].classList[y] == 'event_2') {
                active.event_2 = 2;
            }
        }
        for (let y=0; y < btn[i].classList.length; y++) {
            if (btn[i].classList[y] == 'event_3') {
                active.event_3 = 3;
            }
        }
        for (let y=0; y < btn[i].classList.length; y++) {
            if (btn[i].classList[y] == 'event_4') {
                active.event_4 = 4;
            }
        }
        for (let y=0; y < btn[i].classList.length; y++) {
            if (btn[i].classList[y] == 'event_5') {
                active.event_5 = 5;
            }
        }
    }
    // block
    for (let z=0; z < block.length; z++) {
        if (block[z].dataset.tag == 1) {
            if (active.event_1 == 1) {
                block[z].style.display = 'block';
            } else {
                block[z].style.display = 'none';
            }
        }
        
        if (block[z].dataset.tag == 2) {
            if (active.event_2 == 2) {
                block[z].style.display = 'block';
            } else {
                block[z].style.display = 'none';
            }
        }
        
        if (block[z].dataset.tag == 3) {
            if (active.event_3 == 3) {
                block[z].style.display = 'block';
            } else {
                block[z].style.display = 'none';
            }
        }
        
        if (block[z].dataset.tag == 4) {
            if (active.event_4 == 4) {
                block[z].style.display = 'block';
            } else {
                block[z].style.display = 'none';
            }
        }
        
        if (block[z].dataset.tag == 5) {
            if (active.event_5 == 5) {
                block[z].style.display = 'block';
            } else {
                block[z].style.display = 'none';
            }
        }
    }
    // если вы вылючены (0 - выключены все теги)
    let openAllBlock = 0;
    for (let act in active) {
        let value = active[act];
        if (value > 0) {
            openAllBlock = 1;
        }
    }
    if (openAllBlock == 0) {
        for (let t=0; t < block.length; t++) {
            block[t].style.display = 'block';
        }
    }
}

let eventBtnTag = document.querySelectorAll('.b-events-btn');
let eventBlockTag = document.querySelectorAll('.b-events-item');

B_TagClick(eventBtnTag, eventBlockTag);




// показать больше событей
$(document).ready(function() {
    $('#events-button').click(function (evt) {
        evt.preventDefault();
        $('#events-button').css('display', 'none');
        if ($(window).width() > 991){
            $('.b-events-header').css('display', 'flex');
        }
        if ($(window).width() < 992) {
            $('.b-events-header').css('display', 'none');
        }
        $('.b-events-item').css('display', 'block');
        return false;
    });
});