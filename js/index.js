/* ----------------------------- *\
        SECCION SALUDO
\* ----------------------------- */

const circulos = Array.from(document.getElementsByClassName("saludo-circulo"));

// Opciones para personalizar las animaciones que se aplicara a los circulos
const opciones = {
    duration: 8000,
    direction: "normal",
    easing: "cubic-bezier(.5,.5,.5,1)",
    iterations: Infinity
}

// ANIMACIONES que se aplicaran a cada uno de los elemento con la clase "saludo-circulo"
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

// Boton que llamara un evento que pausara o correra la animacion
const btnAnimacion = document.getElementById("btnPausePlay");
btnAnimacion.addEventListener("click", verificarEstadoAnimacion)

// funcion que verifica si las animaciones estan corriendo o estan en pausa y redirige a otra funcion
function verificarEstadoAnimacion() {
    if (animacionCirculoA.playState === "running") {
        modificarEstadoAnimacion("running");
        cambiarIcono("fa-pause-circle", "fa-play-circle");
    } else {
        modificarEstadoAnimacion("paused");
        cambiarIcono("fa-play-circle", "fa-pause-circle");
    }
}

// Funcion que pausara o en correra nuevamente las animaciones aplicadas a los circulos
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

// Funcion que cambia la clase del elemento contenedor / icono, la cual, corresponde al icono que mostrara
function cambiarIcono(iconoActual, iconoNueva) {
    btnAnimacion.classList.remove(iconoActual);
    btnAnimacion.classList.add(iconoNueva);
}

/* ----------------------------- *\
        SECCION MENU
\* ----------------------------- */

const seccionesDeMenu = Array.from(document.getElementsByClassName("menu-id"));
const btnOlas = document.getElementById("btnOlas");
const btnMenu = document.getElementById("btnMenu");
const btnSaludo = document.getElementById("btnSaludo");
const btnLogo = document.getElementById("btnLogo");
const btnSprite = document.getElementById("btnSprite");

// Si los botones de menu sufren alguna transicion, llamara un evento.
btnOlas.addEventListener("transitionend", () => activarIdSeccion(event, 0))
btnMenu.addEventListener("transitionend", () => activarIdSeccion(event, 1))
btnSaludo.addEventListener("transitionend", () => activarIdSeccion(event, 2))
btnLogo.addEventListener("transitionend", () => activarIdSeccion(event, 3))
btnSprite.addEventListener("transitionend", () => activarIdSeccion(event, 4))

// Esta funcion verifica que la transicion haya sido en su propiedad transform, y si es asi, añade la clase "activo" al menu-id correspondiente
function activarIdSeccion(evento, numeroSeccion) {
    if (evento.propertyName === "transform") {
        seccionesDeMenu[numeroSeccion].classList.toggle("activo")
    }
}

/* ----------------------------- *\
        SECCION MODAL
\* ----------------------------- */

const tiempoAnimacion = 1000;

const seccionModal = document.getElementById("seccionModal")
const capaModal = document.getElementById("capaModal")
const modal = document.getElementById("modal")

// Boton que llamara a un evento que mostrara el modal. 
const btnAbrirModal = document.getElementById("btnModal");
btnAbrirModal.addEventListener("click", abrirModal)

// Funcion que modifica las propiedades de los elementos de la seccion para mostrar el modal.
function abrirModal() {
    seccionModal.style.transform = "initial"
    capaModal.style.transition = tiempoAnimacion + "ms";
    capaModal.classList.add("activa");
    modal.style.animation = 'modalIn ' + tiempoAnimacion + 'ms forwards';
}

// Este boton y la capa de fondo llamaran un evento que escondera nuevamente el modal.
const btnCerrarModal = document.getElementById("btnCerrarModal");
capaModal.addEventListener("click", cerrarModal);
btnCerrarModal.addEventListener("click", cerrarModal);

// funcion que restaura las propiedades iniciales en los elementos de la seccion para esconder el modal.
function cerrarModal() {
    capaModal.classList.remove("activa");
    modal.style.animation = 'modalOut ' + tiempoAnimacion +'ms forwards ease';
    setTimeout(() => { seccionModal.style.transform = "translateY(-2000px)" }, tiempoAnimacion);
}

/* ----------------------------- *\
        SECCION CORAZON
\* ----------------------------- */

const corazon = document.getElementById('corazon');
            
// Evento que asigna / quita un clase, la cual, asigna la animacion al elemento
corazon.addEventListener('click', () => {
    corazon.classList.toggle('is-liked');
});