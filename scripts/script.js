$(document).ready(function () {

	// BURGER

	let burger = document.getElementById("burger");
	let menu = document.getElementById("menu");

	burger.onclick = function () {
		burger.classList.toggle("header__burger_active");
		menu.classList.toggle("header__menu_active");
	};

	headerItems = document.querySelectorAll('.header__item a');

	for (let index = 0; index < headerItems.length; index++) {

		headerItem = headerItems[index];

		headerItem.addEventListener('click', function () {
			burger.classList.toggle("header__burger_active");
			menu.classList.toggle("header__menu_active");
		});
	}

	// bgi

	function bgi() {
		let bgi = document.querySelectorAll(".bgi");
		for (var i = 0; i < bgi.length; i++) {
			if (bgi[i].querySelector('img')) {
				bgi[i].style.backgroundImage = 'url(' + bgi[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
	bgi();

	// SLIDER

	$('.slider').slick({
		draggable: false,
		slidesToShow: 4,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 620,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.clients__slider').slick({
		draggable: false,
		dots: true,
		arrows: false,
		speed: 600,
		slidesToShow: 1,
		infinite: false,
		adaptiveHeight: true
	});

	// CLEARING PLACEHOLDER AFTER FOCUS

	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

	// FILTER

	const work = document.querySelectorAll('.works__object');
	const filter = document.querySelector('.works__filters');
	const filterButtons = document.querySelectorAll('.works__item');

	filter.addEventListener('click', event => {

		if (event.target.tagName != 'LI') return false;

		filterButtons.forEach(color => {
			if (color.classList.contains('works__item_active'))
				color.classList.remove('works__item_active');
		});

		event.target.classList.add('works__item_active');

		let filterClass = event.target.dataset['filter'];

		work.forEach(object => {
			object.classList.remove('hidden');
			if (!object.classList.contains(filterClass) && filterClass != 'All')
				object.classList.add('hidden');
		});

	});

	// SMOOTH SCROLL

	var margin = 40;
	$("a").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - margin + "px"
		},
			{
				duration: 1600,
				easing: "swing"
			});
		return false;
	});


	// FIX HEADER ROW

	const headerWrapper1Row = $('.header__wrapper1-row');
	const headerRowOffset = $('.header__row').offset().top;

	$(window).scroll(function () {
		const scrolled = $(this).scrollTop();

		if (scrolled > headerRowOffset) {
			headerWrapper1Row.addClass('fixed');
		}
		else if (scrolled <= headerRowOffset) {
			headerWrapper1Row.removeClass('fixed');
		}
	})

	// POPUP

	const openPPs = document.querySelectorAll('.pp');
	const popup = document.querySelector('.popup');
	const popupBody = document.querySelectorAll('.popup__body');
	const body = document.querySelector('body');
	const closePP = document.querySelector('.close-popup');
	let paddingToFixBody = (window.innerWidth - document.querySelector('.page-wrapper').offsetWidth) + 'px';
	const headerWrapper2Row = document.querySelector('.header__wrapper2-row');
	const headerWrapperRow = document.querySelector('.header__wrapper1-row');

	for (let index = 0; index < openPPs.length; index++) {

		const openPP = openPPs[index];

		openPP.addEventListener('click', function () {
			if (burger.classList.contains("header__burger_active") && menu.classList.contains("header__menu_active")) {
				burger.classList.toggle("header__burger_active");
				menu.classList.toggle("header__menu_active");
			}

			popup.classList.add('_active');
			body.style.overflow = 'hidden';
			document.querySelector('.page-wrapper').style.paddingRight = paddingToFixBody;

			if (headerWrapperRow.classList.contains("fixed"))
				headerWrapper2Row.style.paddingRight = paddingToFixBody;
		});
	}

	closePP.addEventListener('click', function () {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		document.querySelector('.page-wrapper').style.paddingRight = '0px';
		headerWrapper2Row.style.paddingRight = '0px';
	});

	popup.addEventListener('click', function (e) {
		if (popup.classList.contains('_active') && e.target == popup) {
			popup.classList.remove('_active');
			body.style.overflow = 'visible';
			document.querySelector('.page-wrapper').style.paddingRight = '0px';
			headerWrapper2Row.style.paddingRight = '0px';
		}
	});


});