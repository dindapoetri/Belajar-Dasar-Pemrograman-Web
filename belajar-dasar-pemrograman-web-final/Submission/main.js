let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");

  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = i === currentSlide ? "block" : "none";
  });
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Inisialisasi pertama kali
document.addEventListener("DOMContentLoaded", function() {
  showSlide(currentSlide);
  setInterval(() => {
    moveSlide(1);
  }, 5000);
  
});
