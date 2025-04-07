let navBar = document.querySelector(".nav-bar");

let companyNameDiv = document.createElement("div");
companyNameDiv.className = "company-name-div";

let companyNameH1 = document.createElement("h1");
companyNameH1.className = "company-name-H1";
companyNameH1.textContent = "Coal and Fire BBQ";

companyNameDiv.append(companyNameH1);

let homeButton = document.createElement("button");
homeButton.textContent = "Home";
homeButton.className = "home-button";

let menu = document.createElement("button");
menu.textContent = "Menu";
menu.className = "menu-button";

let aboutUs = document.createElement("button");
aboutUs.textContent = "About Us";
aboutUs.className = "aboutUs-button";

let gallery = document.createElement("button");
gallery.textContent = "Gallery";
gallery.className = "gallery-button";

let buttons = [homeButton, menu, aboutUs, gallery];

let navButtons = document.createElement("div");
navButtons.className = "nav-buttons-div";

buttons.forEach((item) => {
  navButtons.append(item);
});

let homePageImageDiv = document.createElement("div");
homePageImageDiv.className = "home-page-image-div";

import bbqPicture from "./bbq-homepage-picture.jpeg";

let bbqImage = document.createElement("img");
bbqImage.src = bbqPicture;
bbqImage.alt = "Picture of BBQ";

export { navBar, companyNameDiv, navButtons, homePageImageDiv, bbqImage };
