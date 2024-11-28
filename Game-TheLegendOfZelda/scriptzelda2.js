let slideIndex = 0;
let autoPlay;

// Função para mostrar o próximo slide
function proximo() {
    slideIndex = (slideIndex + 1) % document.querySelectorAll('.slide').length;
    mostrarSlide(slideIndex);
}

// Função para mostrar o slide anterior
function anterior() {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
    mostrarSlide(slideIndex);
}

// Função para mostrar um slide específico
function mostrarSlide(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[index].classList.add('ativo');
}

// Evento 1: Função para iniciar o autoplay
function iniciarAutoPlay() {
    pararAutoPlay();
    autoPlay = setInterval(proximo, 2000); // Muda de slide a cada 2 segundos
}

// Evento 2: Função para parar o autoplay
function pararAutoPlay() {
    clearInterval(autoPlay);
}

// Evento 3 e 4: Ir para um slide específico ao clicar no botão
function mudarParaSlide(numero) {
    slideIndex = numero - 1; // Ajusta o índice para começar no slide escolhido
    mostrarSlide(slideIndex);
}

// Inicializa o primeiro slide
mostrarSlide(slideIndex);