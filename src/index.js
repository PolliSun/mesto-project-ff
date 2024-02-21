import "./pages/index.css";
import { openModal, closeModal} from "./components/modal.js";
import { createCard, deleteCard, toggleLikeButtonClass } from "./components/card.js";
import { initialCards } from "./scripts/cards.js";

import card_1Image from "./images/card_1.jpg";
import card_2Image from "./images/card_2.jpg";
import card_3Image from "./images/card_3.jpg";
import avatarImage from "./images/avatar.jpg";

const pageImages =[
  {name: 'card1Image', link: card_1Image},
  {name: 'card2Image', link: card_2Image},
  {name: 'card3Image', link: card_3Image},
  {name: 'avatarImage', link: avatarImage},
]

const profileImage = document.querySelector('.profile__image');
profileImage.style.backgroundImage = `url(${avatarImage})`;



/*Отображение карточек на странице*/

function loadInitialCards() {
  initialCards.forEach((element) => {
    const cardElement = createCard(element, deleteCard, openImagePopup, toggleLikeButtonClass);
    document.querySelector(".places__list").append(cardElement);
  });
}

function openImagePopup(imageLink) {
  const ImagePopup = document.querySelector(".popup_type_image");
  const imageElement = ImagePopup.querySelector(".popup__image");
  imageElement.src = imageLink;
  openModal(ImagePopup);
}


loadInitialCards();

/*Обработчки событий Popup*/
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const formElement  = editProfilePopup.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");


const addNewProfileCardButton = document.querySelector(".profile__add-button");
const newProfileCardPopup = document.querySelector(".popup_type_new-card");
const formCard = newProfileCardPopup.querySelector(".popup__form");

const сloseButtonProfilEdit = editProfilePopup.querySelector(".popup__close");
const сloseButtonProfilCard = document.querySelector(".popup__close");


addNewProfileCardButton.addEventListener("click", () => openModal(newProfileCardPopup));

formElement.addEventListener("submit", saveButtonClickProfilEdit);
formCard.addEventListener("submit", saveButtonClickProfileCard);

сloseButtonProfilEdit.addEventListener("click", () => closeModal(editProfilePopup));
сloseButtonProfilCard.addEventListener("click", () => closeModal(newProfileCardPopup));


function openEditProfileModal() {
  openModal(editProfilePopup);
  nameInput.value = document.querySelector('.profile__title').textContent;
  jobInput.value = document.querySelector('.profile__description').textContent;
}

editProfileButton.addEventListener("click", openEditProfileModal);

function saveButtonClickProfilEdit(event) {
  event.preventDefault();
  const profileName = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  const nameValue = nameInput.value;
  const descriptionValue = descriptionInput.value;

  profileName.textContent = nameValue;
  profileDescription.textContent = descriptionValue;

  closeModal(editProfilePopup);
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

  closeModal(newProfileCardPopup);
}


