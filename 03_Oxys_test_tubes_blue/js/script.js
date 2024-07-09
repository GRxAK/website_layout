document.addEventListener("DOMContentLoaded", function () {

    
    // переход по этапам до main
    const steps = document.querySelector('.b-step');
    const btn = document.querySelectorAll('.s-btn');
    const tube = document.querySelectorAll('.s-tube');
    const tube_box = steps.querySelector('.b-step-1').querySelector('.b-img-box');
    const step_1_point = steps.querySelector('.b-step-1').querySelectorAll('.b-nav-item');
    let currentStep = 1;

    // Привязываем событие click только один раз при загрузке страницы
    tube.forEach(element => {
        element.addEventListener('click', () => {
            if (!element.classList.contains('click')) {
                if (tube_box.classList.contains('active')) {
                    element.classList.add('click');
                    element.classList.add('active');
                    element.classList.add('c' + currentStep);
                    currentStep++;
                    tube_box.classList.add('fin');
                    setTimeout(() => {
                        steps.querySelector('.b-step-1').style.display = 'none';
                        steps.querySelector('.b-step-' + currentStep).style.display = 'block';
                        element.classList.remove('active');
                        tube_box.classList.remove('active');
                        tube_box.classList.remove('fin');
                        step_1_point[currentStep - 1].classList.add('active');
                        btn[1].querySelector('.img').classList.add('is' + (currentStep - 1));
                    }, 500);
                }
            }
        });
    });
    
    btn[0].addEventListener('click', ()=>{
        steps.querySelector('.b-step-start').style.display = 'none';
        steps.classList.remove('bg-empty');
        steps.querySelector('.b-step-1').style.display = 'block';
    });
    btn[1].addEventListener('click', ()=>{
        tube_box.classList.add('active');
    });
    btn[2].addEventListener('click', ()=>{
        steps.querySelector('.b-step-2').style.display = 'none';
        steps.querySelector('.b-step-1').style.display = 'block';
    });
    btn[3].addEventListener('click', ()=>{
        steps.querySelector('.b-step-3').style.display = 'none';
        steps.querySelector('.b-step-1').style.display = 'block';
    });
    btn[4].addEventListener('click', ()=>{
        steps.querySelector('.b-step-4').style.display = 'none';
        steps.querySelector('.b-step-1').style.display = 'block';
    });
    btn[5].addEventListener('click', ()=>{
        steps.querySelector('.b-step-5').style.display = 'none';
        steps.querySelector('.b-step-1').style.display = 'block';
    });
    btn[6].addEventListener('click', ()=>{
        steps.style.display = 'none';
        document.querySelector('.b-main').style.display = 'block';
        animateCount('#progess_1', 1000, 93);
        setTimeout(()=>{animateCount('#progess_2', 1000, 100)}, 1000);
        setTimeout(()=>{animateCount('#progess_3', 1000, 89)}, 2000);
    });



    // отсчте цифр от 0 до Х
    function animateCount(span, duration, targetNumber) {
        let startNumber = 0;
        let startTime = null;
      
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          let progress = timestamp - startTime;
          let percentage = Math.min(progress / duration, 1);
          let currentNumber = Math.floor(percentage * (targetNumber - startNumber) + startNumber);
      
          document.querySelector(span).textContent = currentNumber;
      
          if (progress < duration) {
            window.requestAnimationFrame(step);
          } else {
            document.querySelector(span).textContent = targetNumber;
          }
        }
      
        window.requestAnimationFrame(step);
    }



    // отслеживания скролла до блока
    function trackScroll(blockId) {
        const block = document.querySelector(blockId);

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                    block.classList.add('anim');
                    animateCount('#progess_4', 1500, 93);
                    observer.unobserve(entry.target); // Завершаем наблюдение за блоком
                }
            });
        }, { threshold: 0.2 });

        observer.observe(block);
    }

    trackScroll(".b-order");


});