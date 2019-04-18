const menuBtn = document.querySelector(".menuButton");
const menu = document.querySelector(".menu");
const branding = document.querySelector(".menuBranding");
const menuNav = document.querySelector(".menuNav");
const navitems = document.querySelectorAll(".navItem");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    branding.classList.add("show");
    navitems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    branding.classList.remove("show");
    navitems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
