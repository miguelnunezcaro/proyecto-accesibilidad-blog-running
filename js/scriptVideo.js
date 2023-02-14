let video = document.getElementById("video");

let b = document.getElementById("b");

const cerrarVideo = b.addEventListener('click', () => {
    console.log('Entrando en la función cerrarVideo');
    let div = document.querySelector('#content');
    video.remove();
    div.innerHTML = '';
    div.className = '';
    console.log('Saliendo de la función cerrarVideo');
});

let div = document.querySelector('#content');