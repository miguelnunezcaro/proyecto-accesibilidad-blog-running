let buscar = document.querySelector('#buscar');
let iconoX = document.querySelector('#iconoX');
let iconoLupa = document.querySelector('#iconoLupa');
let textoBuscar = document.querySelector('#textoBuscar');

buscar.addEventListener('click',() => {
    if (iconoLupa.classList.contains('show')) {
        iconoLupa.classList.remove('show');
        iconoLupa.classList.add('collapse');
        iconoX.classList.remove('collapse');
        iconoX.classList.add('show');
        textoBuscar.classList.remove('collapse');
        textoBuscar.classList.add('show');
    }else {
        iconoLupa.classList.remove('collapse');
        iconoLupa.classList.add('show');
        iconoX.classList.remove('show');
        iconoX.classList.add('collapse');
        textoBuscar.classList.remove('show');
        textoBuscar.classList.add('collapse');
    }
});



