
const menuBtn = document.querySelector(".line_wrap");
const nav = document.querySelector(".nav");
const pic = document.querySelector(".my_pic");
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu_item");

// Menu state
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("cross");
    nav.classList.add("show");
    pic.classList.add("show");
    menu.classList.add("show");
    menuItems.forEach((item) => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("cross");
    nav.classList.remove("show");
    pic.classList.remove("show");
    menu.classList.remove("show");
    menuItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
