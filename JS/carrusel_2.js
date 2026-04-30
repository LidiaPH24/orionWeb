let index = 0;
const track = document.querySelector('.carrusel-contenedor');
const cards = document.querySelectorAll('.carrusel_item');
const carousel = document.querySelector('.carrusel');

let cardWidth = carousel.offsetWidth;

function updateWidth() {
    cardWidth = carousel.offsetWidth;
    showSlide(index);
}

function showSlide(i) {
    index = (i + cards.length) % cards.length;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Flecha siguiente
document.querySelector('.next').addEventListener('click', () => {
    showSlide(index + 1);
});

// Flecha anterior
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(index - 1);
});

// Recalcular al cambiar tamaño
window.addEventListener('resize', updateWidth);

// Inicializar
updateWidth();