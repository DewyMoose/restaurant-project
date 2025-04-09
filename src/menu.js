import { navBar, companyNameDiv, navButtons } from "./homepage.js";
import "./style.css";
let menuContentDiv = document.createElement("div");
menuContentDiv.className = "menu-content-div";

navBar.append(companyNameDiv, navButtons);

function showMenu() {
  let menuTextTitle = document.createElement("h1");
  menuTextTitle.className = "menu-text-title";
  menuTextTitle.textContent = "Menu";

  let byThePoundDiv = document.createElement("div");
  byThePoundDiv.className = "by-the-pound-div";

  let byThePoundTitle = document.createElement("h2");
  byThePoundTitle.className = "by-the-pound-title";
  byThePoundTitle.textContent = "BY THE POUND";

  let byThePoundItemDiv = document.createElement("div");
  byThePoundItemDiv.className = "by-the-pound-item-div";

  let byThePoundMenuItems = [
    "BRISKET",
    "PORK SPARE RIBS",
    "PULLED PORK",
    "TURKEY",
    "SAUSAGE",
    "JALAPENO CHEDDER SAUSAGE",
    "BEEF RIB",
  ];
  let byThePoundUL = document.createElement("ul");
  byThePoundDiv.append(byThePoundTitle, byThePoundUL);
  byThePoundMenuItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.append(item);
    byThePoundUL.append(listItem);
  });

  let sandwichMenu = document.createElement("h2");
  sandwichMenu.className = "lunch-menu-title";
  sandwichMenu.textContent = "Sandwhiches";
  let sandwichMenuDiv = document.createElement("div");
  sandwichMenuDiv.className = "sandwich-menu-div";
  let sandwichMenuItems = [
    "BRISKET",
    "PULLED PORK",
    "TURKEY",
    "TIPSY TEXAN",
    "CHOPPED BEEF",
  ];
  let sandwichMenuUL = document.createElement("ul");
  sandwichMenuItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.append(item);
    sandwichMenuUL.append(listItem);
  });
  sandwichMenuDiv.append(sandwichMenu, sandwichMenuUL);

  menuContentDiv.append(
    menuTextTitle,
    byThePoundDiv,
    byThePoundItemDiv,
    sandwichMenuDiv
  );
}

export { menuContentDiv, showMenu };
