// MENU TOGGLE
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
	if (MenuItems.style.maxHeight == "0px") {
		MenuItems.style.maxHeight = "200px";
	} else {
		MenuItems.style.maxHeight = "0px";
	}
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}

// TABS
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e) {
	if (e.target.tagName == 'LI') {
		const targetPanel = document.querySelector(e.target.dataset.target);
		panels.forEach(function(panel) {
			if (panel == targetPanel) {
				panel.classList.add('active');
			} else {
				panel.classList.remove('active');
			}
		})
	}
})

// FORM VALIDATION
const formEmail = document.getElementById('email');
const formMessage = document.getElementById('message');
const form = document.getElementById('form');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

function validateForm() {
	if (formEmail.value === "") {
		emailError.innerHTML = 'email is required.';
		return false;
	}
	if (formMessage.value === "") {
		messageError.innerHTML = 'message is required.';
		return false;
	} else {
		return true;
	}
}

// COOKIE
function closeCookie() {
	document.getElementById('cookiediv').style.display = "none";
}