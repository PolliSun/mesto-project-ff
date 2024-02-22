/*Импорт*/

import "./pages/index.css";
import { openModal, closeModal } from "./components/modal.js";
import {createCard, deleteCard, toggleLikeButtonClass} from "./components/card.js";
import { initialCards } from "./scripts/cards.js";

import card_1Image from "./images/card_1.jpg";
import card_2Image from "./images/card_2.jpg";
import card_3Image from "./images/card_3.jpg";
import avatarImage from "./images/avatar.jpg";

const pageImages = [
  { name: "card1Image", link: card_1Image },
  { name: "card2Image", link: card_2Image },
  { name: "card3Image", link: card_3Image },
  { name: "avatarImage", link: avatarImage },
];

/*Отображение карточек на странице*/
const placesList = document.querySelector(".places__list");

function loadInitialCards() {
  initialCards.forEach((element) => {
    const cardElement = createCard(element, deleteCard, openImagePopup, toggleLikeButtonClass);
    placesList.append(cardElement);
  });
}

/*Открытие модального окна Карточки*/

function openImagePopup(imageLink, imageTitle) {
  const imagePopup = document.querySelector(".popup_type_image");
  const popupImage = imagePopup.querySelector(".popup__image");
  const popupCaption = imagePopup.querySelector(".popup__caption");
  popupImage.src = imageLink;
  popupImage.alt = imageTitle; 
  popupCaption.textContent = imageTitle;
  openModal(imagePopup);
}

loadInitialCards();

/*Обработчки событий Popup*/

const editProfilePopup = document.querySelector(".popup_type_edit");
const newProfileCardPopup = document.querySelector(".popup_type_new-card");

const formEditElement = getFormPopup(editProfilePopup);
const formNewCard = getFormPopup(newProfileCardPopup);

const nameInput = formEditElement.querySelector(".popup__input_type_name");
const jobInput = formEditElement.querySelector(".popup__input_type_description");

document.querySelector(".profile__edit-button").addEventListener("click", function () {openEditProfileModal(); openModal(editProfilePopup);});
document.querySelector(".profile__add-button").addEventListener("click", () => openModal(newProfileCardPopup));

document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".popup")));
});

function getFormPopup(popup) {
  return popup.querySelector(".popup__form");
}

formEditElement.addEventListener("submit", submitButtonClickProfilEdit);
formNewCard.addEventListener("submit", submitButtonClickProfileCard);

function openEditProfileModal() {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
}

/*Функция редактирования профиля*/
function submitButtonClickProfilEdit(event) {
  event.preventDefault();
  document.querySelector(".profile__title").textContent = nameInput.value;
  document.querySelector(".profile__description").textContent = jobInput.value;

  closeModal(editProfilePopup);
}

/*Функция добавления карточки*/
function submitButtonClickProfileCard(event) {
  event.preventDefault();
  const popupInputTypeCardName = event.target.querySelector(".popup__input_type_card-name");
  const popupInputTypeUrl = event.target.querySelector(".popup__input_type_url");

  const newCard = createCard({ name: popupInputTypeCardName.value, link: popupInputTypeUrl.value }, deleteCard, openImagePopup);
  placesList.prepend(newCard);
  event.target.reset();

  closeModal(newProfileCardPopup);
}
