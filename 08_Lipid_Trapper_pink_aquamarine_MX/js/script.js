'use strict'
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

	$('.b-slider-box').slick({
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});


	// TEST block
	const testing = document.querySelector('.b-testing');
	let checkCount = 0;
	let stepPosition = 0;
	let images = testing.querySelectorAll('.b-item');
	let steps = testing.querySelectorAll('.b-step');
	const btnPrev= testing.querySelector('.prev');
	const btnNext = testing.querySelector('.next');
	const btnAgain = testing.querySelector('.again');
	const numbs = testing.querySelectorAll('.b-numb');
	const dots = testing.querySelectorAll('.b-dot');
	const textBox = testing.querySelector('.b-test-box');
	const result = testing.querySelector('.b-result');
	const resultAnswer = testing.querySelectorAll('.s-result');

	images.forEach(element => {
		element.addEventListener('click', ()=>{
			if (element.classList.contains('check')) {
				element.classList.remove('check');
				checkCount--;
			} else {
				element.classList.add('check');
				checkCount++;
			}
		});
	});

	btnNext.addEventListener('click', ()=> {
		if (stepPosition === 3) {
			textBox.classList.add('hidden');
			result.classList.add('active');
			if (checkCount === 0) {
				resultAnswer[0].style.display = 'block';
				btnAgain.style.display = 'block';
			} else if ((checkCount > 0) && (checkCount < 3)) {
				resultAnswer[1].style.display = 'block';
				btnAgain.style.display = 'none';
			} else {
				resultAnswer[2].style.display = 'block';
				btnAgain.style.display = 'none';
			}
		} else {
			steps[stepPosition].classList.remove('active');
			numbs[stepPosition].classList.remove('active');
			dots[stepPosition].classList.remove('active');
			numbs[stepPosition].classList.add('passed');

			stepPosition++

			steps[stepPosition].classList.add('active');
			numbs[stepPosition].classList.add('active');
			dots[stepPosition].classList.add('active');

			if (btnPrev.classList.contains('hidden')) {
				btnPrev.classList.remove('hidden');
			}
		}
	});

	btnPrev.addEventListener('click', ()=> {
		if (stepPosition != 0) {
			steps[stepPosition].classList.remove('active');
			numbs[stepPosition].classList.remove('active');
			dots[stepPosition].classList.remove('active');

			stepPosition--

			steps[stepPosition].classList.add('active');
			numbs[stepPosition].classList.add('active');
			dots[stepPosition].classList.add('active');
			numbs[stepPosition].classList.remove('passed');

			if (stepPosition === 0) {
				btnPrev.classList.add('hidden');
			}
		}
	});

	btnAgain.addEventListener('click', ()=>{
		steps[stepPosition].classList.remove('active');
		numbs[stepPosition].classList.remove('active');
		dots[stepPosition].classList.remove('active');
		stepPosition = 0;
		steps[0].classList.add('active');
		numbs[0].classList.add('active');
		dots[0].classList.add('active');
		numbs.forEach(element => {
			element.classList.remove('passed');
		});
		checkCount = 0;
		images.forEach(element => {
			element.classList.remove('check');
		});
		textBox.classList.remove('hidden');
		result.classList.remove('active');
		btnPrev.classList.add('hidden');
		resultAnswer.forEach(elem => {
			elem.style.display = 'none';
		});
	});

});