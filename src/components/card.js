
export { createCard, deleteCard, placeslist};

const cardTemplate = document.querySelector("#card-template").content;
const placeslist = document.querySelector(".places__list");

function createCard(element, deleteItem) {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  cardElement.querySelector(".card__image").src = element.link;
  cardElement.querySelector(".card__image").alt = element.name;
  cardElement.querySelector(".card__title").textContent = element.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    deleteItem(cardElement);
  });

  return cardElement;
}

const deleteCard = (cardElement) => cardElement.remove();


