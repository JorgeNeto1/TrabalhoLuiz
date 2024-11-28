let currentIndex = 0;

function abrirCenarios() {
    window.location.href = "cenario.html"; 
  }
  
  

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function proximo() {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function anterior() {
  const slides = document.querySelectorAll('.slide');
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

let autoPlayInterval;

function iniciarAutoPlay() {
  pararAutoPlay(); // Garante que não existam múltiplos intervalos
  autoPlayInterval = setInterval(proximo, 3000);
}

function pararAutoPlay() {
  clearInterval(autoPlayInterval);
}

document.addEventListener('DOMContentLoaded', () => showSlide(currentIndex));
