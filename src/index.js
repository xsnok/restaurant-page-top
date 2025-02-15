import "./styles.css"
import { createHome } from "./createHome.js"
import { createMenu } from "./createMenu.js"
import { createAbout } from "./createAbout.js"

let content = document.querySelector("#content");
let home = document.querySelector("#home");
let menu = document.querySelector("#menu");
let about = document.querySelector("#about");

createHome();

home.addEventListener("click", () => {
    content.replaceChildren();
    createHome()
});

menu.addEventListener("click", () => {
    content.replaceChildren();
    createMenu()
});

about.addEventListener("click", () => {
    content.replaceChildren();
    createAbout()
});