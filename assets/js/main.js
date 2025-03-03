
// Seleccionamos todos los elementos que queremos observar
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Creamos una función para configurar el umbral basado en el tipo de sección
const createObserver = (threshold) => {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadimos la clase que activa la animación
                entry.target.classList.add('animated');
                // Dejar de observar el elemento una vez ha sido animado
                observer.unobserve(entry.target);
            }
        });
    }, { threshold }); // Usamos el threshold dinámico
}

// Creamos dos observadores:
const observer50 = createObserver(0.5); // Para las secciones generales (50%)
const observer20 = createObserver(0.2); // Para la sección 2 (20%)

// Iniciamos el observer para cada uno de los elementos
elementsToAnimate.forEach(element => {
    if (element.closest('.section20')) {
        // Si es parte de la sección 2, le aplicamos el observer con threshold 0.2
        observer20.observe(element);
    } else {
        // De lo contrario, usamos el threshold 0.5
        observer50.observe(element);
    }
});


// MENU DESPLEGABLE

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menuDes");
console.log('menu: ', menu);

// Función para abrir/cerrar el menú al hacer clic en el ícono
// menuToggle.addEventListener("click", () => {
//     menu.classList.toggle("active");
//     console.log('menu: ', menu);
// });

// Cerrar el menú si el usuario hace clic fuera de él pero NO FUNCIONA POR QUE ME SACA AUTMATICAMENTE EL active
// document.addEventListener("click", (event) => {
//     if (!menu.contains(event.target) && event.target !== menuToggle) {
//         menu.classList.remove("active");
//     }
// });

// Función para abrir/cerrar el menú al hacer clic en el ícono
menuToggle.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el evento se propague al documento
    menu.classList.toggle("active");
});

// Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener("click", (event) => {
    setTimeout(() => {
        if (!menu.contains(event.target) && event.target !== menuToggle) {
            menu.classList.remove("active");
        }
    }, 50); // Pequeño retraso para evitar el cierre inmediato
});

// VIDEO LINK CON BTN

const video = document.getElementById("background-video");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        //playButton.textContent = "⏸️"; // Cambia el icono a pausa
    } else {
        video.pause();
        //playButton.textContent = "▶️"; // Cambia el icono a play
    }
});
