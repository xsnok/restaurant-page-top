import "./styles.css"

let content = document.querySelector("#content");

function createHeader() {
    let header = document.createElement("div");
    header.id = "header";
    let headerText = document.createElement("div");
    headerText.id = "header-text";
    headerText.textContent = "Welcome to Recipes";
    header.appendChild(headerText);
    content.appendChild(header);
}

function createDescription() {
    let description = document.createElement("div");
    description.id = "description";
    let descriptionText = document.createElement("div");
    descriptionText.className = "description-text";
    let text = "Discover a world of flavors and culinary delights with our curated collection of recipes. From appetizers to desserts, we have something for every palate. Join us on a gastronomic journey and elevate your cooking skills with our easy-to-follow recipes";
    let italicText = `<em>${text}</em>`;
    descriptionText.innerHTML = italicText;
    description.appendChild(descriptionText);
    content.appendChild(description);
}

createHeader();
createDescription();