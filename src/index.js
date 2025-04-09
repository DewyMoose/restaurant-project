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

//styles
//-----------------------//
import "./style.css";
import "./menu.css";

let contentDiv = document.getElementById("content");
let header = document.querySelector("header");

function loadHome() {
  menuContentDiv.remove();
  header.append(contentDiv);
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
  navBar.append(companyNameDiv, navButtons);

  contentDiv.append(homePageImageDiv, quoteDiv, hoursAndLocationDiv);
  homePageImageDiv.append(bbqImage);
}

function loadMenu() {
  contentDiv.remove();
  header.append(menuContentDiv);
  menuContentDiv.innerHTML = "";
  showMenu();
  //this is filler right now but will need to cerate own file for each page
}
function loadAboutUs() {
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
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
