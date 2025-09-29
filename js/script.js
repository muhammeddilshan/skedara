const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
