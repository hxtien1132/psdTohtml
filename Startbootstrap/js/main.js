window.addEventListener("click", (e) => {
 console.log(e.target);
})
const button = document.querySelector(".navbar__btn");
const links = document.querySelector(".navbar__links");
button.addEventListener("click", () => {
  links.classList.toggle("navbar__open");
});