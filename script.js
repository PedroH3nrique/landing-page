var menu = document.querySelector('.menu-aberto');
var aberto = document.querySelector('.menu-escondido');

menu.addEventListener('click', () => {
    if (aberto.style.display === 'none'){
        aberto.style.display = 'block';;
        aberto.style.display = 'flex';;
    }else{
        aberto.style.display = 'none';
    }
})

/*carrosel testemunhas*/


const carousel = document.getElementById('carrosel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = carousel.children.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalItems - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();
