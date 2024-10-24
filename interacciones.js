// Navegación suave al hacer clic en los enlaces del menú
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Manejo del menú y la capa de fondo
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
});

// Al enviar el formulario de la encuesta
document.getElementById("formulario-encuesta").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    alert("Gracias por enviar tu encuesta!");
    // Aquí deberías añadir la lógica para enviar los datos a tu servidor o correo
    this.reset(); // Restablece el formulario
});
