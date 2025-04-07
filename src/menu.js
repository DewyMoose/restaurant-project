import { navBar, companyNameDiv, navButtons } from "./homepage.js";
import "./style.css";

navBar.append(companyNameDiv, navButtons);

let randomDiv = document.createElement("div");
randomDiv.className = "random-div";

export { randomDiv };
