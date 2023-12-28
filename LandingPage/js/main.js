const button = document.querySelector(".navbar__ham")
const links = document.querySelector(".navbar__links")
const overlay = document.querySelector("#overlay")
button.addEventListener("click", () => {
    button.classList.toggle("open")
    links.classList.toggle("nav__open");
    overlay.classList.toggle("show");
})
overlay.addEventListener("click", () => {
    overlay.classList.toggle("show")
    button.classList.toggle("open");
    links.classList.toggle("nav__open");
})