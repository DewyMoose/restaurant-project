//Java Script
//-----------------------//
import {
  navBar,
  companyNameDiv,
  navButtons,
  homePageImageDiv,
  bbqImage,
  quoteDiv,
  hoursAndLocationDiv,
  buttons,
} from "./homepage.js";
import { menuContentDiv, showMenu } from "./menu.js";
import { aboutUsContentDiv, showAbout } from "./about.js";

//styles
//-----------------------//
import "./style.css";
import "./menu.css";
import "./about.css";

let contentDiv = document.getElementById("content");
let body = document.querySelector("body");

let contentDivArray = [contentDiv, menuContentDiv, aboutUsContentDiv];

let removeContentDivs = () => {
  contentDivArray.forEach((item) => {
    item.remove();
  });
};
function loadHome() {
  removeContentDivs();
  body.append(contentDiv);
  contentDiv.innerHTML = "";
  navBar.append(companyNameDiv, navButtons);

  contentDiv.append(homePageImageDiv, quoteDiv, hoursAndLocationDiv);
  homePageImageDiv.append(bbqImage);
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
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
}

navBar.append(companyNameDiv, navButtons);

contentDiv.append(homePageImageDiv, quoteDiv, hoursAndLocationDiv);
homePageImageDiv.append(bbqImage);

buttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.textContent == "Home") {
      loadHome();
      console.log("home clicked");
    } else if (item.textContent == "Menu") {
      loadMenu();
      console.log("Menu clicked");
    } else if (item.textContent == "About Us") {
      loadAboutUs();
      console.log("About clicked");
    } else if (item.textContent == "Gallery") {
      loadGallery();
      console.log("Gallery clicked");
    }
  });
});

export { contentDiv };
