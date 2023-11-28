"use strict";

let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("scrolleando")
    } else if (window.scrollY == 0) {
        header.classList.remove("scrolleando")
    }
})


let form = document.querySelector("#form-contact")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})


let sticky = document.querySelector("#img_sticky")
let img;

let images = [
    '../assets/juego1.png',
    '../assets/juego2.png',
    '../assets/juego3.png',
    '../assets/juego4.png',
]

const scrollHandler = () => {
    const scroll = window.scrollY;
    requestAnimationFrame(() => {
        if (scroll < 4500 && img != 0) {
            img = 0
            updateImage(img)
            stickyAnimation()
        } else if (scroll >= 4500 && scroll <= 4900 && img != 1) {
            img = 1
            updateImage(img)
            stickyAnimation()
        } else if (scroll > 4900 && scroll <= 5400 && img != 2) {
            img = 2
            updateImage(img)
            stickyAnimation()
        } else if (scroll > 5400 && img != 3) {
            img = 3
            updateImage(img)
            stickyAnimation()
        }
    });
};

const updateImage = (newImg) => {
    sticky.src = images[newImg];
    img = newImg;
}

window.addEventListener("scroll", scrollHandler);

let stickyAnimation = () => {
    sticky.classList.toggle('animationStickyOut');

    setTimeout(() => {
        sticky.classList.toggle('animationStickyIn')
        setTimeout(() => {
            sticky.classList.toggle('animationStickyOut')
            sticky.classList.toggle('animationStickyIn')
        }, 300, { once: true })
    }, 300, { once: true })
}


