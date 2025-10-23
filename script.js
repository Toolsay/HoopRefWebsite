const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
const autoAdvanceInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
let currentSlide = 1;

function showSlide(n) {
	currentSlide = ((n % slides.length) + slides.length) % slides.length;

	slides.forEach((slide, index) => {
		slide.classList.remove('active');
		indicators[index].classList.remove('active');
	});

	slides[currentSlide].classList.add('active');
	indicators[currentSlide].classList.add('active');
}

function goToSlide(n) {
	clearInterval(autoAdvanceInterval);
	showSlide(n);
}
