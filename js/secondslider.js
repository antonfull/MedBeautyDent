const swipertwo = new Swiper('.swipertwo', {
	slidesPerView: 4,
	spaceBetween: 30,
	// Optional parameters
	direction: 'horizontal',


	// If we need pagination
	pagination: {
		el: '.specialist-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 4
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 1
		},
		// when window width is >= 480px
		640: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	}
});

