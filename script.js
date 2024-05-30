const slides = document.querySelectorAll('.maglie');

let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const carosello = document.querySelector('.carosello-item-seriea');

  let currentIndex = 0;
  const slides = carosello.querySelectorAll('img');
  const totalSlides = slides.length;


  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
  }

 
  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
  }


  function updateSlide() {
      slides.forEach((slide, index) => {
          if (index === currentIndex) {
              slide.style.display = 'block';
          } else {
              slide.style.display = 'none';
          }
      });
  }

  
  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);

 
  updateSlide();
});
function showAlert() {
    var inputValue = document.getElementById("password").value;
    
    if (inputValue.trim() !== "") {
      alert("Hai scritto: " + inputValue);
    } else {
      alert("Pagamento effettuato con successo");
    }
  }
  function sendText() {
    var text = document.getElementById('textInput').value;
    alert("Recensione inviata!:"+ text);
  }