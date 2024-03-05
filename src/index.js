/*Импорт*/

import "./pages/index.css";
import { openModal, closeModal } from "./components/modal.js";
import {createCard, deleteCard, toggleLikeButtonClass,} from "./components/card.js";
import {initialCards } from "./scripts/cards.js";
import {enableValidation} from "./components/validation.js";

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
const imagePopup = document.querySelector(".popup_type_image");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

function loadInitialCards() {
  initialCards.forEach((element) => {
    const cardElement = createCard(element, deleteCard, handleImageClick, toggleLikeButtonClass);
    placesList.append(cardElement);
  });
}

/*Открытие модального окна Карточки*/
function handleImageClick(imageLink, imageTitle) {
  popupImage.src = imageLink;
  popupImage.alt = imageTitle;
  popupCaption.textContent = imageTitle;
  //clearValidation(getFormPopup, validationConfig);
  openModal(imagePopup);
}

loadInitialCards();

/*Обработчки событий Popup*/

const editProfilePopup = document.querySelector(".popup_type_edit");
const newProfileCardPopup = document.querySelector(".popup_type_new-card");

const formEditElement = getFormPopup(editProfilePopup);
const formNewCard = getFormPopup(newProfileCardPopup);

const nameValue = document.querySelector(".profile__title");
const jobValue = document.querySelector(".profile__description");

const nameInput = formEditElement.querySelector(".popup__input_type_name");
const jobInput = formEditElement.querySelector(".popup__input_type_description");

const editProfileButton = document.querySelector(".profile__edit-button");
const addProfileButton = document.querySelector(".profile__add-button");

editProfileButton.addEventListener("click", () => handleClickEditProfileButton()); 
addProfileButton.addEventListener("click", () => openModal(newProfileCardPopup));

document.querySelectorAll(".popup__close").forEach((button) => { 
  button.addEventListener("click", () => closeModal(button.closest(".popup"))); 
});

formEditElement.addEventListener("submit", handleProfileFormSubmit);
formNewCard.addEventListener("submit", handleCardFormSubmit);

function getFormPopup(popup) {
  return popup.querySelector(".popup__form");
}

function handleClickEditProfileButton() {
  openModal(editProfilePopup);
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  //clearValidation(editProfilePopup, validationConfig);
}

/*Функция редактирования профиля*/
function handleProfileFormSubmit(event) {
  event.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;

  closeModal(editProfilePopup);
}

/*Функция добавления карточки*/
function handleCardFormSubmit(event) {
  event.preventDefault();
  const popupInputTypeCardName = event.target.querySelector(".popup__input_type_card-name");
  const popupInputTypeUrl = event.target.querySelector(".popup__input_type_url");

  const newCard = createCard({ name: popupInputTypeCardName.value, link: popupInputTypeUrl.value },deleteCard, handleImageClick, toggleLikeButtonClass);
  placesList.prepend(newCard);
  event.target.reset();

  //clearValidation(newProfileCardPopup, validationConfig);
  closeModal(newProfileCardPopup);
}

/*Функции валидации*/

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);


