document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("burger").addEventListener("click", function () {
		document.querySelector("nav").classList.toggle("open")
	}),

		document.getElementById("span").addEventListener("click", function () {
			document.querySelector(".nav-submenu").classList.toggle("open")
		})
})