
const botones = document.querySelectorAll(".tab-btn");
const contenidos = document.querySelectorAll(".tab-contenido");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const id = boton.dataset.tab;

        botones.forEach(btn =>
            btn.classList.remove("active")
        );

        contenidos.forEach(tab =>
            tab.classList.remove("active")
        );

        boton.classList.add("active");

        document
            .getElementById(id)
            .classList.add("active");

    });

});