// fetch multilanguage data from my-json-server

const fetchAllData = () => {
  if (localStorage.getItem("lang") === null) {
    select = "en";
  } else {
    select = localStorage.getItem("lang");
  }
  //console.log(localStorage.getItem("portfolio-db"));
  if (localStorage.getItem("portfolio-db") === null) {
    fetch("https://my-json-server.typicode.com/uhenGit/portfolio-db/db")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("portfolio-db", JSON.stringify(data));
        setContent(data);
      })
      .catch((err) => console.log(err));
  } else {
    setContent(JSON.parse(localStorage.getItem("portfolio-db")));
  }
};
//window.onload = fetchAllData;
let select = "";
// document.querySelector(".btn_toggle").addEventListener("click", (e) => {
//   select = e.target.children[0].innerText;
//   localStorage.setItem("lang", select);
//   fetchAllData();
// });
function setContent(info) {
  const textField = document.querySelectorAll(".text");
  for (let i = 0; i < textField.length; i++) {
    textField[i].innerText = Object.values(info[select])[i];
  }
  if (select === "ru") {
    document.querySelector(".btn_toggle").children[0].innerText = "en";
  } else {
    document.querySelector(".btn_toggle").children[0].innerText = "ru";
  }
  console.log(Object.values(info[select]));
  console.log(textField);
}
const menuBtn = document.querySelector(".line_wrap");
const nav = document.querySelector("nav");
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
