let content = document.querySelector("#content");

export function createAbout() {
    let aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    let aboutTitle = document.createElement("div");
    aboutTitle.id = "about-title";
    aboutTitle.textContent = "About Us";

    let aboutText = document.createElement("div");
    aboutText.id = "about-text";
    aboutText.textContent = "At our restaurant, we bring the rich, authentic flavors of Italy to your table with every dish. Our chefs craft each meal using only the finest ingredients, sourced from local markets and imported directly from Italy. The warm ambiance and elegant décor offer the perfect setting for any occasion, whether a romantic evening or a gathering with friends. Experience the essence of Italian hospitality and indulge in a dining experience that feels like a true escape to the heart of Italy.";

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutText);
    content.appendChild(aboutContainer);
}