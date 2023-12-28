const menu = document.querySelector(".navbar__links");
const menuButon = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay")
menuButon.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButon.classList.toggle("open")
    overlay.classList.toggle("show")
})
overlay.addEventListener("click",function () {
  menu.classList.toggle("navbar__open");
  menuButon.classList.toggle("open");
  overlay.classList.toggle("show");
})