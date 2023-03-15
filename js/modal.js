/* modal window */
// Открыть модальное окно
document.getElementById("open-modal-btn").addEventListener("click", function () {
	document.getElementById("my-modal").classList.add("open")
})

// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function () {
	document.getElementById("my-modal").classList.remove("open")
})

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
	if (e.key === "Escape") {
		document.getElementById("my-modal").classList.remove("open")
	}
});

// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
	event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
	if (event._isClickWithInModal) return;
	event.currentTarget.classList.remove('open');
});

/* scroll to top */

window.onload = function () {
	//window.scrollTo(x,y)
	var scrolled;
	var timer;

	document.getElementById('top').onclick = function () {
		scrolled = window.pageYOffset;
		//window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop() {
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50; //100 - скорость прокрутки
			timer = setTimeout(scrollToTop, 1);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0, 0);
		}
	}
}