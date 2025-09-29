const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  document.body.classList.toggle("menu-active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.classList.remove("menu-active");
});
