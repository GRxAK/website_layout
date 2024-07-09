document.addEventListener("DOMContentLoaded", function () {

    function ScrollBlock(block) {
        $('a[href="' + block + '"]').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(block).offset().top - 90
            }, 1000);
        });
    }
    ScrollBlock('#form');

    $('.b-slider-box').slick({
        dots: true,
    });


});