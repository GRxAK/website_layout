document.addEventListener("DOMContentLoaded", function () {

	// scroll
	function ScrollBlock(block) {
		$('.scroll').click(function (e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $(block).offset().top - 90
			}, 1000);
		});
	}
	ScrollBlock('#form');

    // relatives
        // Функция инициализации слайдера
        function initSlickSlider() {
            $('#relatives').slick({
                dots: true,
                slidesToShow: 2,
                touchThreshold: 15,
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

        if ($(window).width() < 1190) {
                // Если ширина экрана меньше брейкпоинта, инициализируем слайдер
                if (!$('#relatives').hasClass('slick-initialized')) {
                    initSlickSlider();
                }
        } 
        
        // Функция удаления (отключения) слайдера
        function destroySlickSlider() {
            // Проверяем, инициализирован ли слайдер
            if ($('#relatives').hasClass('slick-initialized')) {
                $('#relatives').slick('unslick');
            }
        }
        
        // Обрабатываем изменение размера окна
        $(window).on('load resize', function() {
            // Устанавливаем брейкпоинт, до которого будет работать слайдер
            var mobileBreakpoint = 1190; // например, для ширины экрана меньше 768px
            
            if ($(window).width() < mobileBreakpoint) {
                // Если ширина экрана меньше брейкпоинта, инициализируем слайдер
                if (!$('#relatives').hasClass('slick-initialized')) {
                    initSlickSlider();
                }
            } else {
                // В противном случае, если ширина экрана больше брейкпоинта, уничтожаем слайдер
                destroySlickSlider();
            }
        });
    

    // reviews
	$('#reviews').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
        touchThreshold: 20,
		responsive: [
			{
				breakpoint: 1190,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

});