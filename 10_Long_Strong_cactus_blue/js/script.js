$(document).ready(function(){   


    function B_Scroll (id) {
        $link = 'a[href*="'+ id +'"]';
        $($link).click(function (evt) {
            evt.preventDefault();
            if ($(window).width() < 1184){
                $("html, body").animate({scrollTop: ($(id).offset().top - 0)}, 1000);
                $('.b-nav-wap-btn').removeClass('b-nav-wap-btn-open');
                setTimeout(function(){$('.b-nav').css('display', 'none');}, 1000);
                $('.b-nav').removeClass('a-translate-y-open');
                $('.b-nav').addClass('a-translate-y-close');
            } else {
                $("html, body").animate({scrollTop: ($(id).offset().top - 0)}, 1000);
            }
            return false;
        });
    }
    B_Scroll ('#form');


    // MARK CIRCLE
    // исходный скрипт js/circletype.min.js
    // Переменные для ресайда окна, что бы одна и таже фунция выполнялась только один раз, для мобилки 1 и для десктопа 1.
    let markActiveMobil = false;
    let markActiveDesct = false;
    // Есть надо поменять радиус букв, то надо поиграться с переменной "R"
    function MarkStart(idOne, idTwo, wind, R) {
        new CircleType(document.getElementById(idOne)).radius(R);
        new CircleType(document.getElementById(idTwo)).radius(R);
        wind = true;
    }

    // Изночальный запуск
    function MarkG0 () {
        if ($(window).width() > 1209 && !markActiveDesct) {
            MarkStart('mark_3', 'mark_4', markActiveDesct, 45);
        }
        if ($(window).width() < 1210 && !markActiveMobil) {
            MarkStart('mark_1', 'mark_2', markActiveMobil, 33);
        }
    }
    MarkG0();

    // Для отобножения при изменения ширены экрана
    $( window ).resize(function() {
        MarkG0();
    });

    
    // slider
    let Slider = {
        Click(btn, items) {
            for (let i=0; i < btn.length; i++) {
                btn[i].addEventListener('click', ()=>{
                    let prev;
                    for (let d=0; d < items.length; d++) {
                        for (let c=0; c < items[d].classList.length; c++) {
                            if (items[d].classList[c] == 'active') {
                                prev = d;
                            }
                        }
                    }
                    
                    this.Anim(i, prev, items);
                });
            }
        },
        Prev(items) {
            let position = 0;
            let positionNext = 0;
            for (let i = 0; i < items.length; i++) {
                for (let y = 0; y < items[i].classList.length; y++) {
                    if (items[i].classList[y] == "active") {
                        position = i;
                    }
                }
            }
            if (position == 0) {
                positionNext = (items.length - 1);
            } else {
                positionNext = position - 1;
            }
            this.Anim(positionNext, position, items);
        },
        Next(items) {
            let position = 0;
            let positionNext = 0;
            for (let i = 0; i < items.length; i++) {
                for (let y = 0; y < items[i].classList.length; y++) {
                    if (items[i].classList[y] == "active") {
                        position = i;
                    }
                }
            }
            if (position == (items.length - 1)) {
                positionNext = 0;
            } else {
                positionNext = position + 1;
            }
            this.Anim(positionNext, position, items);
        },
        Anim(index, prev, items) {
            items[prev].classList.remove("active");
            items[index].classList.add("active");
        },
        ClickBtn(btn, items) {
            btn.addEventListener('click', ()=>{
                if (btn.classList[0] == 'b-btn-left') {
                    this.Prev(items);
                } else if (btn.classList[0] == 'b-btn-right') {
                    this.Next(items);
                }
            });
        },
    }
    


    // запускаем слайдеры 
    sliderOneBox = document.getElementById('s_compound');
    sliderOneItems = document.getElementById('s_compound').querySelectorAll('.b-slider');
    sliderOneBtnLeft = document.getElementById('s_compound_btn').querySelector('.b-btn-left');
    sliderOneBtnRight = document.getElementById('s_compound_btn').querySelector('.b-btn-right');
    sliderOneBtnItems = document.getElementById('s_compound_icon').querySelectorAll('.b-item');

    Slider.ClickBtn(sliderOneBtnLeft, sliderOneItems);
    Slider.ClickBtn(sliderOneBtnRight, sliderOneItems);
    Slider.Click(sliderOneBtnItems, sliderOneItems);

    
    sliderTwoBox = document.getElementById('s_reviews');
    sliderTwoItems = document.getElementById('s_reviews').querySelectorAll('.b-slider');
    sliderTwoBtnLeft = document.getElementById('s_reviews_btn').querySelector('.b-btn-left');
    sliderTwoBtnRight = document.getElementById('s_reviews_btn').querySelector('.b-btn-right');

    
    Slider.ClickBtn(sliderTwoBtnLeft, sliderTwoItems);
    Slider.ClickBtn(sliderTwoBtnRight, sliderTwoItems);


    // тач
    function TouchSliader(box, item) {

        var touchStartX = null; //Точка начала касания
        var touchPositionX = null; //Текущая позиция
        const sensitivity = 50; // Чувствительность

        //Перехватываем события
        box.addEventListener("touchstart", function (e) { TouchStart(e) }); //Начало касания
        box.addEventListener("touchmove", function (e) { TouchMove(e) }); //Движение пальцем по экрану
        box.addEventListener("touchend", function (e) { TouchEnd(e) }); //Пользователь отпустил экран

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
            if ((touchPositionX < (touchStartX - sensitivity)) && (touchPositionX != null)) {
                Slider.Next(item);
            } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
                Slider.Prev(item);
            }
        }

    }
    TouchSliader(sliderOneBox, sliderOneItems);
    TouchSliader(sliderTwoBox, sliderTwoItems);

});

