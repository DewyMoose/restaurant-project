import bbqPicture from "./bbq-homepage-picture.jpeg";

let navBar = document.querySelector(".nav-bar");
let contentDiv = document.getElementById("content");

let homeContentDiv = document.createElement("div");
homeContentDiv.className = "home-content-div";

// === Nav Bar ===

function createCompanyNameDiv() {
  let companyNameDiv = document.createElement("div");
  companyNameDiv.className = "company-name-div";

  let companyNameH1 = document.createElement("h1");
  companyNameH1.className = "company-name-H1";
  companyNameH1.textContent = "Coal and Fire BBQ";

  companyNameDiv.append(companyNameH1);
  return companyNameDiv;
}

function createNavButtonsDiv() {
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

  let navButtons = document.createElement("div");
  navButtons.className = "nav-buttons-div";

  [homeButton, menu, aboutUs, gallery].forEach((btn) => {
    navButtons.append(btn);
  });

  return navButtons;
}

function createNavBar() {
  let companyNameDiv = createCompanyNameDiv();
  let navButtons = createNavButtonsDiv();
  navBar.append(companyNameDiv, navButtons);
}

// === Home Page ===

function createHomePageImageDiv() {
  let homePageImageDiv = document.createElement("div");
  homePageImageDiv.className = "home-page-image-div";

  let bbqImage = document.createElement("img");
  bbqImage.src = bbqPicture;
  bbqImage.alt = "Picture of BBQ";

  homePageImageDiv.append(bbqImage);
  return homePageImageDiv;
}

function createQuoteDiv() {
  let quoteDiv = document.createElement("div");
  quoteDiv.className = "quote-div";

  let quote = document.createElement("h1");
  quote.className = "quote-h1";
  quote.textContent = '"SERVING THE BEST BARBECUE IN THE KNOWN UNIVERSE."';

  let quoteAuthor = document.createElement("h3");
  quoteAuthor.className = "quote-author";
  quoteAuthor.textContent = "-Texas Monthly";

  quoteDiv.append(quote, quoteAuthor);
  return quoteDiv;
}

function createHoursAndLocationDiv() {
  let hoursAndLocationDiv = document.createElement("div");
  hoursAndLocationDiv.className = "hours-and-location-div";

  let hoursDiv = document.createElement("div");
  hoursDiv.className = "hours-div";

  let hoursTitle = document.createElement("h2");
  hoursTitle.className = "hours-title";
  hoursTitle.textContent = "OUR HOURS";

  let hoursText = document.createElement("h4");
  hoursText.className = "hours-text";
  hoursText.textContent = "Open for lunch 6 days a week";

  hoursDiv.append(hoursTitle, hoursText);

  let locationDiv = document.createElement("div");
  locationDiv.className = "location-div";

  let locationTitle = document.createElement("h2");
  locationTitle.className = "location-title";
  locationTitle.textContent = "OUR LOCATION";

  let locationText = document.createElement("h4");
  locationText.className = "location-text";
  locationText.textContent = "On Austin's historic East Side";

  locationDiv.append(locationTitle, locationText);

  hoursAndLocationDiv.append(hoursDiv, locationDiv);
  return hoursAndLocationDiv;
}

function showHomePage() {
  let imageDiv = createHomePageImageDiv();
  let quoteDiv = createQuoteDiv();
  let hoursLocationDiv = createHoursAndLocationDiv();

  homeContentDiv.append(imageDiv, quoteDiv, hoursLocationDiv);
  contentDiv.append(homeContentDiv);
}

// === Export ===

export { createNavBar, showHomePage, homeContentDiv };
