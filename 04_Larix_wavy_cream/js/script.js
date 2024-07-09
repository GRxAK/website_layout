document.addEventListener("DOMContentLoaded", function () {

    Stages = {
        itemsImg: document.querySelector('.b-stages').querySelectorAll('.b-square-item'),
        itemsText: document.querySelector('.b-stages').querySelectorAll('.b-text-item'),
        Click(items, itemsTwo) {
            let positionNext = 0;
            for (let i=0; i < items.length; i++) {
                items[i].addEventListener('click', ()=>{
                    positionNext = i;
                    for (let y=0; y < items.length; y++) {
                        items[y].classList.remove('active');
                        itemsTwo[y].classList.remove('active');
                    }
                    items[positionNext].classList.add("active");
                    itemsTwo[positionNext].classList.add("active");
                });
            }
        },
        Start() {
            this.Click(this.itemsImg, this.itemsText);
        },
    }
    Stages.Start();

    Reviews = {
        sliders: document.querySelector('.b-reviews').querySelectorAll('.b-slider'),
        boxTop: document.querySelector('.b-reviews').querySelector('.b-slider-box'),
        btns: document.querySelector('.b-reviews').querySelectorAll('.b-btn'),
        Click(items) {
            let positionNext = 0;
            for (let i=0; i < items.length; i++) {
                Reviews.btns[i].addEventListener('click', ()=>{
                    positionNext = i;
                    for (let y=0; y < Reviews.btns.length; y++) {
                        Reviews.btns[y].classList.remove('active');
                        items[y].classList.remove('active');
                    }
                    Reviews.btns[positionNext].classList.add('active');
                    items[positionNext].classList.add("active");
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
            items[position].classList.remove("active");
            items[positionNext].classList.add("active");
            Reviews.btns[position].classList.remove('active');
            Reviews.btns[positionNext].classList.add('active');
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
            items[position].classList.remove("active");
            items[positionNext].classList.add("active");
            Reviews.btns[position].classList.remove('active');
            Reviews.btns[positionNext].classList.add('active');
        },
        Touch(box) {

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
                    Reviews.Next(Reviews.sliders);
                } else if ((touchPositionX > (touchStartX + sensitivity)) && (touchPositionX != null)) {
                    Reviews.Prev(Reviews.sliders);
                }
            }

        },
        Start() {
            this.Touch(this.boxTop);
            this.Click(this.sliders);
        },
    }
    Reviews.Start();

    // scroll
    function ScrollBlock(block) {
        $('a[href="' + block + '"]').click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(block).offset().top - 90
            }, 1000);
        });
    }
    ScrollBlock('#form');

});

// ANIMATION






window.addEventListener('load', function () {
    const header = this.document.querySelector('.b-header');
    const danger = this.document.querySelector('.b-danger');
    const improves = this.document.querySelector('.b-improves');
    const order = this.document.querySelector('.b-order');
    //
    const percents = {
        block: document.querySelector('.b-percents'),
        a1: document.querySelector('.b-percents').querySelector('.a1'),
        a2: document.querySelector('.b-percents').querySelector('.a2'),
        a3: document.querySelector('.b-percents').querySelector('.a3'),
        a4: document.querySelector('.b-percents').querySelector('.a4'),
        max1: parseInt(document.querySelector('.b-percents').querySelector('.a1').innerText),
        max2: parseInt(document.querySelector('.b-percents').querySelector('.a2').innerText),
        max3: parseInt(document.querySelector('.b-percents').querySelector('.a3').innerText),
        max4: parseInt(document.querySelector('.b-percents').querySelector('.a4').innerText),
        Start() {
            this.a1.innerText = 0;
            this.a2.innerText = 0;
            this.a3.innerText = 0;
            this.a4.innerText = 0;
        },
    }
    percents.Start();
    //
    function GoPrecents () {
        CounterNumbs(percents.a1, percents.max1);
        setTimeout(()=> { CounterNumbs(percents.a2, percents.max2) }, 500);
        setTimeout(()=> { CounterNumbs(percents.a3, percents.max3) }, 800);
        setTimeout(()=> { CounterNumbs(percents.a4, percents.max4) }, 1000);
    }
    
    function CounterNumbs(block, max) {
        let start = 0;
        setInterval(()=>{
            if (start != max) {
                block.innerText = start++;
            } else {
                return;
            }
        },10);
    }
    //

    header.classList.add('go');

    let counterDanger = 0;
    let counterImproves = 0;
    let counterPercents = 0;
    let counterOrder = 0;

    window.addEventListener("scroll", function() {
        let scroll = window.pageYOffset + (window.innerHeight / 2);

        let offsetDanger = danger.offsetTop;
        let offsetImproves = improves.offsetTop;
        let offsetPercents = percents.block.offsetTop;
        let offsetOreder = order.offsetTop;
       
        if (scroll > offsetDanger && counterDanger == 0) {
            danger.classList.add('go');
            counterDanger = 1;
        }

        if (scroll > offsetImproves && counterImproves == 0) {
            improves.classList.add('go');
            counterImproves = 1;
        }

        if (scroll > offsetPercents && counterPercents == 0) {
            GoPrecents();
            counterPercents = 1;
        }

        if (scroll > offsetOreder && counterOrder == 0) {
            order.classList.add('go');
            counterOrder = 1;
        }

    });
});