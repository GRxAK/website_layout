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
    ScrollBlock('.scroll-about', '.b-about');
    ScrollBlock('.scroll-services', '.b-services');
    ScrollBlock('.scroll-contact', '.b-contact');

    //
    // const input = document.querySelectorAll(".b-input");
    // const placeholder = document.querySelectorAll(".b-placeholder");

    // for (i=0; i < input.length; i++) {
    //     input[i].addEventListener("focus", () => {
    //         if (input[i].value === "") {
    //             placeholder[i].style.display = "none";
    //         }
    //     });
    //     input[i].addEventListener("blur", () => {
    //         if (input[i].value === "") {
    //         placeholder[i].style.display = "block";
    //         }
    //     });
    // }




});