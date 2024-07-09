$('#sliders').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});

$(document).ready(function() {

    // b-aboutus card:hover
    let aboutusImages = document.querySelector('.b-aboutus').querySelectorAll('.b-item');
    let aboutusCards = document.querySelector('.b-aboutus').querySelectorAll('.b-card');
    for (let i=0; i < aboutusCards.length; i++) {
        aboutusCards[i].addEventListener('mouseover', ()=> {
            aboutusImages[i].style.opacity = '1';
        });
        aboutusCards[i].addEventListener('mouseout', ()=> {
            aboutusImages[i].style.opacity = '0';
        });
    }

    // scroll
    function ScrollBlock(block) {
        $('a[href="' + block + '"]').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(block).offset().top - 90
            }, 1000);
        });
    }
    ScrollBlock('#start');
    ScrollBlock('#capabilities');
    ScrollBlock('#aboutus');
    ScrollBlock('#footer');
    ScrollBlock('#feedback');

    // текущий год
    let currentYear = new Date().getFullYear();
    $('.year').html(currentYear);

    // open/close menu
    let menuBtnOpen = document.querySelector("#header").querySelector(".b-btn-menu");
    let menuBtnClose = document.querySelector("#header").querySelector(".b-btn-close");
    let menuBtnMenu = document.querySelector("#header").querySelector(".b-menu");
    let menuBoolean = false;
    menuBtnOpen.addEventListener('click', ()=> {
        if (!menuBoolean) {
            menuBoolean = true;
            menuBtnMenu.style.display = 'flex';
            menuBtnMenu.classList.remove("a-menu-close");
            menuBtnMenu.classList.add("a-menu-open");
        }
    });
    menuBtnMenu.addEventListener('click', ()=> {
        if (menuBoolean) {
            menuBtnMenu.classList.remove("a-menu-open");
            menuBtnMenu.classList.add("a-menu-close");
            setTimeout(()=>{
                menuBtnMenu.style.display = 'none';
                menuBoolean = false;
            }, 400);
        }
    });

    // плавающий header
    $(function () {
        $b_nav = $('#header');
        $active = false;   // проверяет удалины ли классы ухода блока
        $(window).scroll(function () {
            if (!$active) {
                if ($(this).scrollTop() > 0) {
                    if (!($('#header').hasClass('scroll'))) {
                        $('#header').addClass('scroll');
                    }
                }
                else if ($(this).scrollTop() == 0) {
                    if ($('#header').hasClass('scroll')) {
                        $active = true;
                        setTimeout(function(){ $('#header').removeClass('scroll'); $active = false;}, 200);
                    }
                }
            }
        });
    });

    // valid input 
    let inputs = document.querySelectorAll('.b-input');
    let inputsLabel = document.querySelectorAll('.b-label');
    for (let i=0; i < inputs.length; i++) {
        inputs[i].oninput = function () {
            if (inputs[i].validity.valid && (inputs[i].value.length > 0)) {
                inputsLabel[i].querySelector('img').style.opacity = '1';
                
            } else {
                inputsLabel[i].querySelector('img').style.opacity = '0';
                
            }
        }
        inputs[i].onblur = function () {
            if ((inputs[i].value.length == 0)) {
                inputs[i].style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }
        }
        inputs[i].onfocus = function () {
            inputs[i].style.borderColor = '#fff';
        }
    }
});