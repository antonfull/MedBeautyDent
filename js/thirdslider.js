const sertificateswiper = new Swiper('.sertificateswiper', {
	slidesPerView: 4,
	spaceBetween: 30,
	// Optional parameters
	direction: 'horizontal',


	// If we need pagination
	pagination: {
		el: '.specialist-pagination',
		dynamicBullets: true,
		dynamicMainBullets: 14
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
			spaceBetween: 20
		},
		// when window width is >= 480px
		640: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	}
});