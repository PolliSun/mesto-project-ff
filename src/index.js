import "./pages/index.css";

import card_1Image from "./images/card_1.jpg";
import card_2Image from "./images/card_2.jpg";
import card_3Image from "./images/card_3.jpg";
import { openProfileModal, closeProfileModal } from "./components/modal.js";

import avatarImage from "./images/avatar.jpg";

const profileImage = document.querySelector(".profile__image");
profileImage.style.backgroundImage = `url(${avatarImage})`;

import { createCard, deleteCard } from "./components/card.js";
import { initialCards } from "./scripts/cards.js";

/*Отображение карточек на странице*/

function loadInitialCards() {
  initialCards.forEach((element) => {
    const cardElement = createCard(element, deleteCard);
    document.querySelector(".places__list").append(cardElement);
  });
}

loadInitialCards();

/*Обработчки событий Popup*/
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const saveButtonProfilEdit = editProfilePopup.querySelector(".popup__form");
const сloseButtonProfilEdit = editProfilePopup.querySelector(".popup__close");

const addNewProfileCardButton = document.querySelector(".profile__add-button");
const newProfileCardPopup = document.querySelector(".popup_type_new-card");
const saveButtonProfileCard = newProfileCardPopup.querySelector(".popup__form");
const сloseButtonProfilCard = newProfileCardPopup.querySelector(".popup__close");


editProfileButton.addEventListener("click", () => openProfileModal(editProfilePopup));
addNewProfileCardButton.addEventListener("click", () => openProfileModal(newProfileCardPopup));

saveButtonProfileCard.addEventListener("submit", saveButtonClickProfileCard);
saveButtonProfilEdit.addEventListener("submit", saveButtonClickProfilEdit);

сloseButtonProfilEdit.addEventListener("click", () => closeProfileModal(editProfilePopup));
сloseButtonProfilCard.addEventListener("click", () => closeProfileModal(newProfileCardPopup));

function saveButtonClickProfilEdit(event) {
  event.preventDefault();

  const profileName = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");
  const inputName = editProfilePopup.querySelector(".popup__input_type_name");
  const inputDescription = editProfilePopup.querySelector(
    ".popup__input_type_description"
  );

  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  closeProfileModal(editProfilePopup);
}

function saveButtonClickProfileCard (event) {
  event.preventDefault();

  const popupInputTypeCardName = newProfileCardPopup.querySelector(
    ".popup__input_type_card-name"
  );
  const popupInputTypeUrl = newProfileCardPopup.querySelector(".popup__input_type_url");

  const newCardData = {
    name: popupInputTypeCardName.value,
    link: popupInputTypeUrl.value
  };

  const newCard = createCard(newCardData, deleteCard);
  const placesList = document.querySelector(".places__list");
  placesList.prepend(newCard);


  popupInputTypeCardName.value = '';
  popupInputTypeUrl.value = '';

  closeProfileModal(newProfileCardPopup);
}
