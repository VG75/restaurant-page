// import "./style.css"; // Add this in src/index.js
import {renderHome} from "./home.js"
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");



home.addEventListener("click", () => {
    renderHome();
});
