// interacciones.js

document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const imageContainers = document.querySelectorAll('.image-container');
    const hobbyImages = document.querySelectorAll('.hobby-img');
    
    // Agregar interacciones para las imágenes de la línea de tiempo
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = item.querySelector('.description');
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                description.style.display = 'block';
            }
        });
    });

    // Agregar interacciones para las imágenes de hobbies
    hobbyImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('¡Has clickeado en una imagen de hobby!');
        });
    });

    // Mantener el menú visible al hacer scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
});
