const track = document.querySelector(".carrusel-track");
const next = document.querySelector(".derecha");
const prev = document.querySelector(".izquierda");

let posicion = 0;
let cardWidth = document.querySelector(".card").offsetWidth;

next.addEventListener("click", () => {
    posicion++;
    track.style.transform = `translateX(-${posicion * cardWidth}px)`;
});

prev.addEventListener("click", () => {
    posicion--;
    if(posicion < 0) posicion = 0;
    track.style.transform = `translateX(-${posicion * cardWidth}px)`;
});