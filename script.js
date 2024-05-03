const slides = document.querySelectorAll('.maglie');

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
