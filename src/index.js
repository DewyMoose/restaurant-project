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
import "./style.css";

import { randomDiv } from "./menu.js";

let contentDiv = document.getElementById("content");

function loadHome() {
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
  navBar.append(companyNameDiv, navButtons);

  contentDiv.append(homePageImageDiv, quoteDiv, hoursAndLocationDiv);
  homePageImageDiv.append(bbqImage);
}

function loadMenu() {
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
  contentDiv.append(randomDiv);
}
function loadAboutUs() {
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
  contentDiv.append(randomDiv);
}
function loadGallery() {
  contentDiv.innerHTML = "";
  //this is filler right now but will need to cerate own file for each page
  contentDiv.append(randomDiv);
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
