export { createCard, deleteCard, toggleLikeButtonClass };

const cardTemplate = document.querySelector("#card-template").content;

function createCard(element, deleteItem, handleImageClick, toggleLikeButtonClass) {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  cardImage.addEventListener("click", () => handleImageClick(element.link, element.name));

  const likeCard = cardElement.querySelector(".card__like-button");
  likeCard.addEventListener("click", function () {
    toggleLikeButtonClass(likeCard);
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    deleteItem(cardElement);
  });

  return cardElement;
}

const toggleLikeButtonClass = (likeCard) =>
likeCard.classList.toggle("card__like-button_is-active");

const deleteCard = (cardElement) => cardElement.remove();
