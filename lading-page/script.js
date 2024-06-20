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