// import "./style.css"; // Add this in src/index.js
import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
const container = document.querySelector("#container")



home.addEventListener("click", () => {
    renderHome();
});

menu.addEventListener("click", () => {
    container.innerHTML = '';
    const menuElements = renderMenu();
    container.appendChild(menuElements.heading);
    container.appendChild(menuElements.div1);
    container.appendChild(menuElements.div2);
    container.appendChild(menuElements.div3);
});