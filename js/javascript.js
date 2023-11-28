"use strict";

let form = document.querySelector("#form-contact")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})


// CONSIGNA 3 Menu 
let menu = document.getElementById("menu_hamb");
function toggleMenu(element) {
    element.classList.toggle("clicked");

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// CONSIGNA 4  STICKY 

let sticky = document.querySelector("#img_sticky");
let img;

// Array de rutas de imágenes
let images = [
    '../assets/juego1.png',
    '../assets/juego2.png',
    '../assets/juego3.png',
    '../assets/juego4.png',
];

// Función que maneja el evento de desplazamiento
const scrollHandler = () => {
    // Obtiene el valor de desplazamiento vertical
    const scroll = window.scrollY;

    // Utiliza requestAnimationFrame para optimizar el rendimiento
    requestAnimationFrame(() => {
        console.log(scroll)
        // Determina qué imagen mostrar según el desplazamiento
        if (scroll < 4350 && img != 0) {
            img = 0;
            updateImage(img);
            stickyAnimation();
        } else if (scroll >= 4350 && scroll <= 4900 && img != 1) {
            img = 1;
            updateImage(img);
            stickyAnimation();
        } else if (scroll > 4900 && scroll <= 5250 && img != 2) {
            img = 2;
            updateImage(img);
            stickyAnimation();
        } else if (scroll > 5250 && img != 3) {
            img = 3;
            updateImage(img);
            stickyAnimation();
        }
    });
};

// Función para actualizar la imagen mostrada
const updateImage = (newImg) => {
    sticky.src = images[newImg];
    img = newImg;
};

// Agrega el evento de desplazamiento
window.addEventListener("scroll", scrollHandler);

// Función para animar el elemento sticky
let stickyAnimation = () => {
    sticky.classList.toggle('animationStickyOut');

    // Establece temporizadores para agregar y quitar clases de animación
    setTimeout(() => {
        sticky.classList.toggle('animationStickyIn');
        setTimeout(() => {
            sticky.classList.toggle('animationStickyOut');
            sticky.classList.toggle('animationStickyIn');
        }, 300, { once: true });
    }, 300, { once: true });
};


// CONSIGNA 5 
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolleando")
    } else if (window.scrollY == 0) {
        header.classList.remove("scrolleando")
    }
})


// CONSIGNA 6  duende paralax
// Función para actualizar la posición del duende verde en función del desplazamiento
function updateDuendeParallax() {
    // Obtén el valor de desplazamiento vertical
    const scrollTop = window.scrollY;

    // Aplica parallax al duende verde según la velocidad especificada
    const duende = document.querySelector('.duende_container img[data-velocidad]');
    if (duende) {
        const speed = parseFloat(duende.getAttribute('data-velocidad'));
        const translateY = - scrollTop * speed / 40;
        duende.style.transform = `translateY(${translateY}px)`;
    }
}

// Asigna la función al evento de desplazamiento
window.addEventListener('scroll', updateDuendeParallax);

// Llama a la función inicialmente para establecer la posición inicial
updateDuendeParallax();


// CONSIGNA 7  paralax inicio
// Función para actualizar la posición de los elementos en función del desplazamiento
function updateParallax() {
    // Obtén el valor de desplazamiento vertical
    const scrollTop = window.scrollY;

    // Aplica parallax a los elementos según la velocidad especificada
    document.querySelectorAll('.parallax-edificios [data-speed]').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        const translateY = scrollTop * speed / 10;
        element.style.transform = `translateY(${translateY}px)`;
    });

    document.querySelectorAll('.spiderwoman [data-speed], .spiderman [data-speed], .spiderblack [data-speed], .telarania [data-speed]').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed'));
        const translateY = scrollTop * speed / 20;
        element.style.transform = `translateY(${translateY}px)`;
    });
}

// Asigna la función al evento de desplazamiento
window.addEventListener('scroll', updateParallax);

// Llama a la función inicialmente para establecer la posición inicial
updateParallax();


// CONSIGNA 8 paralax vengadores
const parallaxContainer = document.getElementById('parallaxContainer');
const parallaxBg = document.getElementById('parallaxBg');
const personajesParallax = document.getElementById('personajesParallax');

parallaxContainer.addEventListener('mousemove', (e) => {
    const offsetX = e.clientX / window.innerWidth - .5;
    const offsetY = e.clientY / window.innerHeight - .5;

    parallaxBg.style.transform = `translate(${offsetX * 20}px, ${offsetY * 10}px)`;
    personajesParallax.style.transform = `translate(${offsetX * 40}px, ${offsetY * 40}px)`;
});


// CONSIGNA 9 seccion amigos
document.addEventListener("DOMContentLoaded", function () {
    const seccionAmigos = document.querySelector(".seccion_amigos");

    function checkVisibility() {
        const rect = seccionAmigos.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            seccionAmigos.classList.add("in-viewport");
        }else{
            seccionAmigos.classList.remove("in-viewport");
        }
    }
    window.addEventListener("scroll", checkVisibility);
});


// CONSIGNA 11  Ghostrider

window.addEventListener('scroll', function () {
    const offset = window.scrollY;
    const cards = document.querySelectorAll('.card');
    if (offset > 1800 && offset < 2600) {
        cards.forEach(function (card, index) {
            const move = (offset - 2000) / 25; //velocidad de movimiento
            switch (index) {
                case 0://la tarjeta 1
                    card.style.transform = `translateY(${move}px) rotate(-13.078deg)`;//esto lo mueve on scroll
                    card.addEventListener('mouseenter', function () {
                        card.style.transform = `translateZ(30px) scale(1.1)`;//lo mueve on hover
                    })
                    card.addEventListener('mouseleave', function () {
                        card.style.transform = `translateZ(0px) scale(1)`;
                        card.style.transform = `translateY(${move}px) rotate(-13.078deg)`;//lo regresa a su pos original cuando sale el mouse
                    })
                    break;
                case 1://la tarjeta 2
                    card.style.transform = `translateY(${move}px) rotate(-26.474deg)`;//esto lo mueve on scroll
                    card.addEventListener('mouseenter', function () {
                        card.style.transform = `translateZ(30px) scale(1.1)`;//lo mueve on hover
                    })
                    card.addEventListener('mouseleave', function () {
                        card.style.transform = `translateZ(0px) scale(1)`;
                        card.style.transform = `translateY(${move}px) rotate(-26.474deg)`;//lo regresa a su pos original cuando sale el mouse
                    })
                    break;
                case 2://la tarjeta 3
                    card.style.transform = `translateY(${move}px) rotate(-36.016deg)`;//esto lo mueve on scroll
                    card.addEventListener('mouseenter', function () {
                        card.style.transform = `translateZ(30px) scale(1.1)`;//lo mueve on hover
                    })
                    card.addEventListener('mouseleave', function () {
                        card.style.transform = `translateZ(0px) scale(1)`;
                        card.style.transform = `translateY(${move}px) rotate(-36.016deg)`;//lo regresa a su pos original cuando sale el mouse
                    })
                    break;
            }

        });
    }
});


// CONSIGNA 12  Hover spiders
const imagess = document.querySelectorAll('.tres-spider');
const fondo3spiders = document.getElementById('fondo-tres-spiders');
imagess.forEach((image) => {
    image.addEventListener('mouseenter', function () {

        const imagenSeleccionada = event.target.id;
        if (imagenSeleccionada === 'tres-spiders-gwen') {
            fondo3spiders.src = './assets/3spidersFondo1.svg'
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.style.transition = 'all 0.3s ease';
        } else if (imagenSeleccionada === 'tres-spiders-peter') {
            fondo3spiders.src = './assets/3spidersFondo2.svg'
            fondo3spiders.classList.add('tres-spiders-fondo1');
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.style.transition = 'all 0.3s ease';

        } else if (imagenSeleccionada === 'tres-spiders-miles') {
            fondo3spiders.src = './assets/3spidersFondo3.svg'
            fondo3spiders.id = 'tres-spiders-fondo1';
            fondo3spiders.classList.add('tres-spiders-fondo1');
        }

        imagess.forEach((img) => {
            image.classList.add('agrandar');
            if (img !== image) { // No aplica el efecto a la imagen actual
                img.classList.add('borroso'); // Agrega la clase blur a las otras imágenes
            }
        });
    });

    image.addEventListener('mouseleave', function () {
        imagess.forEach((img) => {
            fondo3spiders.src = './assets/3spidersFondo.svg'
            fondo3spiders.classList.remove('tres-spiders-fondo1');
            fondo3spiders.id = 'fondo-tres-spiders'
            img.classList.remove('borroso'); // Elimina la clase blur para quitar el desenfoque
            image.classList.remove('agrandar');

        });
    });
});

// loader 

    let loader = document.querySelector('.loader_container')
    let layout = document.querySelector('.layout')
    layout.style.display = "none"
    setTimeout(() => {
        layout.style.display = "block"
        loader.style.display = "none"
    }, 5000);

