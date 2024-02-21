
export { createCard, deleteCard, toggleLikeButtonClass };

const cardTemplate = document.querySelector("#card-template").content;

function createCard(element, deleteItem, cardImagePopup) {
  const cardElement = cardTemplate.querySelector(".places__item").cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image")
  const cardTitle = cardElement.querySelector(".card__title")

  cardImage.src = element.link;
  cardTitle.alt = element.name;
  cardTitle.textContent = element.name;

  cardImage.addEventListener("click", () => cardImagePopup(element.link));

  const likeButton = cardElement.querySelector(".card__like-button");
  likeButton.addEventListener("click", function () {
    toggleLikeButtonClass (likeButton);
  });

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", function () {
    deleteItem(cardElement);
  });

  return cardElement;
}

const toggleLikeButtonClass  = (likeButton) => likeButton.classList.toggle('card__like-button_is-active');

const deleteCard = (cardElement) => cardElement.remove();



