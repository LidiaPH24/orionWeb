const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");

let segundos = 20;
let index = 0;

function mostrarSlide(i) {
    slides.forEach(s => s.classList.remove("activo"));
    puntos.forEach(p => p.classList.remove("activo"));

    slides[i].classList.add("activo");
    puntos[i].classList.add("activo");
}

puntos.forEach((p, i) => {
    p.addEventListener("click", () => {
        index = i;
        mostrarSlide(index);
    });
});

setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    mostrarSlide(index);
}, 10000);