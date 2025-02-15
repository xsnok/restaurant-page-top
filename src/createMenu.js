let content = document.querySelector("#content");

function createCard(price, title, description) {
    let menuCard = document.createElement("div");
    menuCard.className = "menu-card";

    let menuPrice = document.createElement("div");
    menuPrice.className = "menu-price";
    menuPrice.textContent = price;

    let menuTitle = document.createElement("div");
    menuTitle.className = "menu-title";
    menuTitle.textContent = title;

    let menuDescription = document.createElement("div");
    menuDescription.className = "menu-description";
    menuDescription.textContent = description;

    menuCard.appendChild(menuPrice);
    menuCard.appendChild(menuTitle);
    menuCard.appendChild(menuDescription);
    return menuCard;
}

function createCardContainer() {
    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";
    let cardTruffleRisotto = createCard("$32", "Truffle Risotto", "Creamy Arborio rice infused with black truffle and Parmigiano-Reggiano.");
    let cardOssoBuco = createCard("$28", "Osso Buco", "Slow-braised veal shank in a rich red wine and tomato sauce.");
    let cardLobsterRavioli = createCard("$26", "Lobster Ravioli", "House-made pasta filled with lobster and ricotta in a saffron cream sauce.");
    let cardEggplantParmesan = createCard("$22", "Eggplant Parmesan", "Layers of crispy eggplant, fresh mozzarella, and basil marinara.");

    menuContainer.appendChild(cardTruffleRisotto);
    menuContainer.appendChild(cardOssoBuco);
    menuContainer.appendChild(cardLobsterRavioli);
    menuContainer.appendChild(cardEggplantParmesan);

    content.appendChild(menuContainer);
}

export function createMenu() {
    createCardContainer();
}