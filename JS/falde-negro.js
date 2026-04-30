let slides = document.querySelectorAll(".slide");
let fade = document.querySelector(".fade-negro");
let index = 0;

let tiempoVisible = 5000; // imagen visible
let tiempoFade = 600;     // negro

function cambiarSlide() {

  // 1. activar negro
  fade.classList.add("activo");

  setTimeout(() => {

    // 2. cambiar slide
    slides[index].classList.remove("activo");

    index = (index + 1) % slides.length;

    slides[index].classList.add("activo");

    // 3. quitar negro
    fade.classList.remove("activo");

  }, tiempoFade);

}

// intervalo total = imagen + fade
setInterval(cambiarSlide, tiempoVisible + tiempoFade);