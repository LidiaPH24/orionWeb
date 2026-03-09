
// AL HACER CLICK EN EL BOTÓN DE HAMBURGUESA, INTERCAMBIAMOS LA CLASE .menuDesplegado
btnMenu.addEventListener('click', () => {
    const cajaMenu = document.querySelector('.menuDesktop');
    const btnMenu = document.getElementById('btnMenu');
    const open = cajaMenu.classList.toggle('menuDesplegado');
});
