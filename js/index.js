const circulos = Array.from(document.getElementsByClassName("saludo-circulo"));
const opciones = {
    duration: 8000,
    delay: 1000,
    direction: "alternate",
    easing: "ease-out",
    iterations: Infinity
}

const animacionCirculoA = circulos[0].animate([
    { width: "150px", opacity: 1, left: "10px" }, // 0%
    { width: "150px", opacity: 1, left: "10px" }, // 25%
    { width: "150px", opacity: 1, left: "calc(50% - 150px)" }, // 50%
    { width: "300px", opacity: 0, left: "calc(50% - 150px)" }, // 75%
    { width: "300px", opacity: 0, left: "calc(50% - 150px)" }, // 100%
], opciones);

const animacionCirculoB = circulos[1].animate([
    { width: "150px", opacity: 1, right: "10px" }, // 0%
    { width: "150px", opacity: 1, right: "10px" }, // 25%
    { width: "150px", opacity: 1, right: "calc(50% - 150px)" }, // 50%
    { width: "300px", opacity: 0, right: "calc(50% - 150px)" }, // 75%
    { width: "300px", opacity: 0, right: "calc(50% - 150px)" }, // 100%
], opciones);

const animacionCirculoC = circulos[2].animate([
    { opacity: 0 }, // 0%
    { opacity: 0 }, // 20%
    { opacity: 0 }, // 40%
    { opacity: 0 }, // 60%
    { opacity: 1 }, // 80%
    { opacity: 1 }, // 100%
], opciones);

const btnAnimacion = document.getElementById("btnPausePlay");

btnAnimacion.addEventListener("click", () => {
    if (btnAnimacion.classList.contains("fa-pause-circle")) {
        modificarEstadoAnimacion("running");
        cambiarIcono("fa-pause-circle", "fa-play-circle");
    } else {
        modificarEstadoAnimacion("paused");
        cambiarIcono("fa-play-circle", "fa-pause-circle");
    }
})

function modificarEstadoAnimacion(estadoActual) {
    if (estadoActual === "running") {
        animacionCirculoA.pause()
        animacionCirculoB.pause()
        animacionCirculoC.pause()
    } else {
        animacionCirculoA.play()
        animacionCirculoB.play()
        animacionCirculoC.play()
    }
}

function cambiarIcono(iconoActual, iconoNueva) {
    btnAnimacion.classList.remove(iconoActual);
    btnAnimacion.classList.add(iconoNueva);
}