//Java Script
//-----------------------//
import { createNavBar, showHomePage, homeContentDiv } from "./homepage.js";
import { menuContentDiv, showMenu } from "./menu.js";
import { aboutUsContentDiv, showAbout } from "./about.js";
import { galleryContentDiv, showGallery } from "./gallery.js";

//styles
//-----------------------//
import "./style.css";
import "./menu.css";
import "./about.css";
import "./gallery.css";

createNavBar();
showHomePage();

let contentDiv = document.getElementById("content");
let body = document.querySelector("body");

let contentDivArray = [
  contentDiv,
  menuContentDiv,
  aboutUsContentDiv,
  galleryContentDiv,
];

let removeContentDivs = () => {
  contentDivArray.forEach((item) => {
    item.remove();
  });
};
function loadHome() {
  removeContentDivs();
  body.append(contentDiv);
  body.append(homeContentDiv);
  homeContentDiv.innerHTML = "";
  showHomePage();
}

function loadMenu() {
  removeContentDivs();
  body.append(menuContentDiv);
  menuContentDiv.innerHTML = "";
  showMenu();
}
function loadAboutUs() {
  removeContentDivs();
  body.append(aboutUsContentDiv);
  aboutUsContentDiv.innerHTML = "";
  showAbout();
}
function loadGallery() {
  removeContentDivs();
  body.append(galleryContentDiv);
  galleryContentDiv.innerHTML = "";
  showGallery();
}
let buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.textContent == "Home") {
      loadHome();
    } else if (item.textContent == "Menu") {
      loadMenu();
    } else if (item.textContent == "About Us") {
      loadAboutUs();
    } else if (item.textContent == "Gallery") {
      loadGallery();
    }
  });
});
