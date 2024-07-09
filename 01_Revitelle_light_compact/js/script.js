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
    ScrollBlock('.scroll-form', '#form');
    ScrollBlock('.scroll-difference', '#difference');
    ScrollBlock('.scroll-expert', '#expert');
    ScrollBlock('.scroll-compound', '#compound');
    ScrollBlock('.scroll-reviews', '#reviews');

    $('#s-reviews').slick({
        dots: true,
        arrows: false,
    });

    // spoler
    function SpolerGo () {
        const compounds = document.querySelectorAll('.b-compound-item');
        compounds.forEach(element => {
            element.addEventListener('click', ()=> {
                if (element.classList.contains('open')) {
                    element.classList.remove('open');
                } else {
                    element.classList.add('open');
                }
            });
        });
    }
    SpolerGo();

    // добавляет первую букву в b-ava из имени 
    function AvaNameGo () {
        const reviewsAva = document.querySelector('.b-reviews').querySelectorAll('.b-ava');
        const reviewsName = document.querySelector('.b-reviews').querySelectorAll('.b-name');
        for (let i = 0; i < reviewsName.length; i++) {
            let firstNonSpaceChar = '';
            for (let j = 0; j < reviewsName[i].querySelector('b').textContent.length; j++) {
                if (reviewsName[i].querySelector('b').textContent[j] !== ' ') {
                    firstNonSpaceChar = reviewsName[i].querySelector('b').textContent[j];
                    break;
                }
            }
            reviewsAva[i].textContent = firstNonSpaceChar;
        }
    }
    AvaNameGo();

    // простой таймер обратного отсчета
    $(document).ready(function() {
        let count = $(".s-counter").html(),
            speed = 4000,
            counterInfo = parseInt(count);
    
        setInterval(function() {
            if (counterInfo !== 3) {
                $(".s-counter").html(counterInfo--);
            }
        }, speed)
    
    });

});