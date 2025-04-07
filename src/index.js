import {
  navBar,
  companyNameDiv,
  navButtons,
  homePageImageDiv,
  bbqImage,
  quoteDiv,
  hoursAndLocationDiv,
} from "./homepage.js";
import "./style.css";

let contentDiv = document.getElementById("content");
navBar.append(companyNameDiv, navButtons);

contentDiv.append(homePageImageDiv, quoteDiv, hoursAndLocationDiv);
homePageImageDiv.append(bbqImage);
