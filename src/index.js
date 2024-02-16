import './pages/index.css';
import avatarImage from '../src/images/avatar.jpg';
import card_1Image from '../src/images/card_1.jpg';
import card_2Image from '../src/images/card_2.jpg';
import card_3Image from '../src/images/card_3.jpg';
import { initialCards } from '../src/scripts/cards.js';

const profileImage = document.querySelector('.profile__image');
profileImage.style.backgroundImage = `url(${avatarImage})`;

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const placeslist = document.querySelector(".places__list");
// @todo: Функция создания карточки
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

// @todo: Функция удаления карточки
const deleteCard = (cardElement) => cardElement.remove();

// @todo: Вывести карточки на страницу
initialCards.forEach(element => {
  const cardElement = createCard(element, deleteCard);
  placeslist.append(cardElement);
});