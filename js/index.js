// JavaScript para controlar el carrusel
const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');

let counter = 1;
const itemWidth = carouselItems[0].clientWidth;

setInterval(() => {
    carouselSlide.style.transition = 'transform 1s ease-in-out';
    carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
    counter++;
    if (counter >= carouselItems.length) {
        counter = 0;
    }
}, 5000); // Cambia la imagen cada 5 segundos

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

function showImageModal(imageUrl) {
    modal.style.display = 'flex';
    modalImg.src = imageUrl;
}

function hideImageModal() {
    modal.style.display = 'none';
}
     // Función para mostrar el modal con la imagen en grande
function showImageModal(image) {
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

modal.style.display = 'flex';
modalImg.src = image.src;
}

// Función para ocultar el modal
function hideImageModal() {
const modal = document.getElementById('imageModal');
modal.style.display = 'none';
}

