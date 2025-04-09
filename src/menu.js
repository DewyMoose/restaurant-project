import { navBar, companyNameDiv, navButtons } from "./homepage.js";
import "./style.css";
let menuContentDiv = document.createElement("div");
menuContentDiv.className = "menu-content-div";

navBar.append(companyNameDiv, navButtons);

function showMenu() {
  let menuTextTitle = document.createElement("h1");
  menuTextTitle.className = "menu-text-title";
  menuTextTitle.textContent = "Menu";

  let byThePoundTitle = document.createElement("h2");
  byThePoundTitle.className = "by-the-pound-title";
  byThePoundTitle.textContent = "BY THE POUND";
  let byThePoundDiv = document.createElement("div");
  byThePoundDiv.className = "by-the-pound-div";

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
  byThePoundDiv.append(byThePoundUL);
  byThePoundMenuItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.append(item);
    byThePoundUL.append(listItem);
  });

  let byThePoundPriceDiv = document.createElement("div");
  byThePoundPriceDiv.className = "by-the-pound-price-div";

  let byThePoundPrices = ["$39", "$34", "$32", "$32", "$26", "$26", "$44"];

  let byThePoundPriceUL = document.createElement("ul");
  byThePoundPrices.forEach((item) => {
    let byThePoundPriceLI = document.createElement("li");
    byThePoundPriceLI.append(item);
    byThePoundPriceUL.append(byThePoundPriceLI);
  });
  byThePoundPriceDiv.append(byThePoundPriceUL);

  let byThePoundContainer = document.createElement("div");
  byThePoundContainer.className = "by-the-pound-container";
  byThePoundContainer.append(byThePoundDiv, byThePoundPriceDiv);

  let sandwichMenu = document.createElement("h2");
  sandwichMenu.className = "sandwich-menu-title";
  sandwichMenu.textContent = "Sandwiches";
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

  let sandwichePriceDiv = document.createElement("div");
  sandwichePriceDiv.className = "sandwich-price-div";

  let sandwichPrices = ["$18.50", "$16", "$16", "$14", "$7"];

  let sandwichPriceUL = document.createElement("ul");
  sandwichPrices.forEach((item) => {
    let byThePoundPriceLI = document.createElement("li");
    byThePoundPriceLI.append(item);
    sandwichPriceUL.append(byThePoundPriceLI);
  });
  sandwichePriceDiv.append(sandwichPriceUL);

  let sandwichContainer = document.createElement("div");
  sandwichContainer.className = "sandwich-container";
  sandwichContainer.append(sandwichMenuDiv, sandwichePriceDiv);

  menuContentDiv.append(
    menuTextTitle,
    byThePoundTitle,
    byThePoundContainer,
    sandwichMenu,
    sandwichContainer
  );
}

export { menuContentDiv, showMenu };
