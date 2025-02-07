// import "./style.css"; // Add this in src/index.js
import {renderHome} from "./home.js";
import {renderMenu} from "./menu.js";
import {renderContact} from "./contact.js"

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");
const container = document.querySelector("#container")

const homeElements = renderHome();
const menuElements = renderMenu();
const contactElements = renderContact();

home.addEventListener("click", () => {
    container.innerHTML = '';
    container.innerHTML = homeElements.homeDiv;
});

menu.addEventListener("click", () => {
    container.innerHTML = '';
    container.appendChild(menuElements.heading);
    container.appendChild(menuElements.div1);
    container.appendChild(menuElements.div2);
    container.appendChild(menuElements.div3);
});

contact.addEventListener("click", () => {
    renderContact();
    container.innerHTML = '';
    container.innerHTML = contactElements.contacts;
});