/* swiper */
const swiper = new Swiper('.swiper', {
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

/* burger */

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector("nav").classList.toggle("open")
	}),

		document.getElementById("span").addEventListener("click", function () {
			document.querySelector(".nav-submenu").classList.toggle("open")
		})
})