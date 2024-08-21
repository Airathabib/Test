$(document).ready(($) => {
	$('#btn-menu').on('click', function (e) {
		$(this).toggleClass('active');
		$('#menu').toggleClass('menu-active');
	})

	// slider
	$(document).ready(function () {
		$(".slider").bxSlider({
			prevSelector: '#rightBtn',
			nextSelector: '#leftBtn',
			nextText: '',
			prevText: '',
			speed: 800,
			captions: false,
			minSlides: 3,
			maxSlides: 3,
			moveSlides: 1,
			pager: true,
		});
	});
})


