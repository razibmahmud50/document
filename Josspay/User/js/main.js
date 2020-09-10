(function ($) {
	"use strict";

	// Collapse Navbar
	var navbarCollapse = function () {
		if ($("#main-nav").offset().top > 100) {
			$("#main-nav").addClass("navbar-shrink");
			$("#main-nav .nav-link").css({
				'padding': '3px 12px'
			});
		} else {
			$("#main-nav").removeClass("navbar-shrink");
			$("#main-nav .nav-link").css({
				'padding': '8px 12px'
			});
		}
	};

	// Collapse nav if page is not at top
	navbarCollapse();
	// Collapse navbar when page is scrolled
	$(window).scroll(navbarCollapse);
	$('.dropdown-toggle').click(function () {
		$(this).next('.dropdown-menu').slideToggle(300);
	});
	$('body').on('click', function () {
		$('#services-dropdown').css({
			'display': 'none'
		});

	});
	$('#main-nav .dropdown-toggle').on('click', function (e) {
		e.stopPropagation();
	});

	// home-page-top slider
	$('#home-top-slider, #benefit-slider, #signup-process-slider').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		dots:false,
		animateOut: 'fadeInDown',
        animateIn: 'fadeInDown',
		responsive: {
			0: {
				items: 1
			}
		}
	})

})(jQuery);