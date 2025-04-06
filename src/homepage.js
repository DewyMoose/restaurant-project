let navBarButtons = document.createElement("div");
let homeButton = document.createElement("button");
homeButton.textContent = "test";
let newButton = document.createElement("button");
newButton.textContent = "test2";

function doThings() {
  let navBar = document.querySelector(".nav-bar");
  navBar.append(navBarButtons, homeButton, newButton);
}

export { navBarButtons, homeButton, doThings };
