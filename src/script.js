// Lógica para mostrar/ocultar el menú en dispositivos pequeños
const openButton = document.getElementById('open');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('close');

openButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    openButton.classList.toggle('hidden'); // Oculta el botón de hamburguesa
    closeButton.classList.toggle('hidden'); // Muestra el botón de cerrar
});

closeButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    closeButton.classList.toggle('hidden'); // Oculta el botón de cerrar
    openButton.classList.toggle('hidden'); // Muestra el botón de hamburguesa
});

// Inicializar Swiper
const swiper = new Swiper('.swiper', {
    // Opciones de configuración
    loop: true, // Habilitar el ciclo infinito
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite hacer clic en los puntos de paginación
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
