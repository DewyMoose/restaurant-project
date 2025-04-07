import {
  navBar,
  companyNameDiv,
  navButtons,
  homePageImageDiv,
  bbqImage,
} from "./homepage.js";
import "./style.css";

let contentDiv = document.getElementById("content");
navBar.append(companyNameDiv, navButtons);

contentDiv.append(homePageImageDiv);
homePageImageDiv.append(bbqImage);
