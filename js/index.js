var btnAnimacion = document.getElementById("btnPausePlay");

btnAnimacion.addEventListener("click", () => {
    if (btnAnimacion.classList.contains("fa-pause-circle")) {
        modificarEstadoAnimacion("paused");
        cambiarIcono("fa-pause-circle", "fa-play-circle");
    } else {
        modificarEstadoAnimacion("running");
        cambiarIcono("fa-play-circle", "fa-pause-circle");
    }
})

var arregloCirculosAnimados = Array.from(document.getElementsByClassName("saludo-circulo"));

function modificarEstadoAnimacion(estado) {
    arregloCirculosAnimados.map((circulo) => {
        circulo.style.webkitAnimationPlayState = estado;
    })
}

function cambiarIcono(iconoActual, iconoNueva) {
    btnAnimacion.classList.remove(iconoActual);
    btnAnimacion.classList.add(iconoNueva);
}