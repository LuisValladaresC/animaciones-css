const circulos = Array.from(document.getElementsByClassName("saludo-circulo"));
const opciones = {
    duration: 8000,
    direction: "normal",
    easing: "cubic-bezier(.5,.5,.5,1)",
    iterations: Infinity
}

const animacionCirculoA = circulos[0].animate([
    { width: "150px", opacity: 0, left: "10px" }, // 0%
    { width: "150px", opacity: 1, left: "10px" }, // 25%
    { width: "150px", opacity: 1, left: "calc(50% - 150px)" }, // 50%
    { width: "300px", opacity: 0, left: "calc(50% - 150px)" }, // 75%
    { width: "300px", opacity: 0, left: "calc(50% - 150px)" }, // 100%
], opciones);

const animacionCirculoB = circulos[1].animate([
    { width: "150px", opacity: 0, right: "10px" }, // 0%
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
    { opacity: 0 }, // 100%
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

// 
// 

const modal = document.getElementById("modal")
const capaModal = document.getElementById("capaModal")
const seccionModal = document.getElementById("seccionModal")

const abrirModal = document.getElementById("btnModal");
const cerrarModal = document.getElementById("btnCerrarModal");

const tiempoAnimacion = 1000;

abrirModal.addEventListener("click", () => {
    seccionModal.style.transform = "initial"
    capaModal.style.transition = tiempoAnimacion + "ms";
    capaModal.classList.add("activa");
    modal.style.animation = 'modalIn ' + tiempoAnimacion + 'ms forwards';
})

cerrarModal.addEventListener("click", () => {
    capaModal.classList.remove("activa");
    modal.style.animation = 'modalOut ' + tiempoAnimacion +'ms forwards ease';
    setTimeout(() => { seccionModal.style.transform = "translateY(-3000px)" }, tiempoAnimacion);
})