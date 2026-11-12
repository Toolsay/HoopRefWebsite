const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');

indicators.forEach((button, index) => {
	button.addEventListener('click', () => {
		slides.forEach((slide, slideIndex) => {
			slide.hidden = slideIndex !== index;
			indicators[slideIndex].setAttribute('aria-pressed', String(slideIndex === index));
		});
	});
});
