document.addEventListener("DOMContentLoaded", function () {

    // scroll
    function ScrollBlock(btn ,block) {
        $(btn).click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(block).offset().top
            }, 1000);
        });
    }
    ScrollBlock('.scroll-form', '.main-form');
    ScrollBlock('.scroll-compound', '.b-compound');
    ScrollBlock('.scroll-expert', '.b-expert');
    ScrollBlock('.scroll-recipe', '.b-recipe');
    ScrollBlock('.scroll-reviews', '.b-reviews');

    // Функция инициализации слайдера
    function initSlickSlider() {
        $('.slider-choice').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $('.slider-reviews').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
        $('.slider-expert').slick({
            dots: true,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    if ($(window).width() < 1170) {
            // Если ширина экрана меньше брейкпоинта, инициализируем слайдер
            if (!$('.slider-choice').hasClass('slick-initialized')) {
                initSlickSlider();
            }
    } 
    
    // Функция удаления (отключения) слайдера
    function destroySlickSlider() {
        // Проверяем, инициализирован ли слайдер
        if ($('.slider-choice').hasClass('slick-initialized')) {
            $('.slider-choice').slick('unslick');
            $('.slider-reviews').slick('unslick');
            $('.slider-expert').slick('unslick');
        }
    }
    
    // Обрабатываем изменение размера окна
    $(window).on('load resize', function() {
        // Устанавливаем брейкпоинт, до которого будет работать слайдер
        var mobileBreakpoint = 1170; // например, для ширины экрана меньше 768px
        
        if ($(window).width() < mobileBreakpoint) {
            // Если ширина экрана меньше брейкпоинта, инициализируем слайдер
            if (!$('.slider-choice').hasClass('slick-initialized')) {
                initSlickSlider();
            }
        } else {
            // В противном случае, если ширина экрана больше брейкпоинта, уничтожаем слайдер
            destroySlickSlider();
        }
    });


});