"use strict";
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    console.log(window.scrollY)
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