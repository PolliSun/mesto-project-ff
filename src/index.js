/*Импорт*/

import "./pages/index.css";
import { openModal, closeModal } from "./components/modal.js";
import { createCard, handleDeleteCard } from "./components/card.js";
import { initialCards } from "./scripts/cards.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  getUserInfo,
  getInitialCards,
  updateUserProfile,
  updateUserAvatar,
  createCard as apiCreateCard,
  putLikeCard,
  deleteLikeCard,
  apiDeleteCard,
} from "./components/api.js";

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

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");

const profileForm = document.forms["edit-profile"];
const profileSubmitButton = profileForm.querySelector(".popup__button");
const editProfilePopup = document.querySelector(".popup_type_edit");
const editProfileButton = document.querySelector(".profile__edit-button");

const cardForm = document.forms["new-place"];
const cardSubmitButton = cardForm.querySelector(".popup__button");
const newProfileCardPopup = document.querySelector(".popup_type_new-card");
const addProfileButton = document.querySelector(".profile__add-button");

const avatarForm = document.forms["edit-avatar"];
const avatarSubmitButton = avatarForm.querySelector(".popup__button");
const editAvatarPopup = document.querySelector(".popup_type_avatar");

const formEditProfile = getFormPopup(editProfilePopup);
const formNewCard = getFormPopup(newProfileCardPopup);
const formEditAvatar = getFormPopup(editAvatarPopup);

const placesList = document.querySelector(".places__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".places__item");
const imagePopup = document.querySelector(".popup_type_image");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

let userId;
let currentCardIdToDelete;
let currentCardElementToDelete;

const fillProfileData = ({ name, about, avatar }) => {
  profileTitle.textContent = name;
  profileDescription.textContent = about;
  profileAvatar.style.backgroundImage = `url(${avatar})`;
};

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const renderLoading = (isLoading, button) => {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
};

function getFormPopup(popup) {
  return popup.querySelector(".popup__form");
}

document.querySelectorAll(".popup__close").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.closest(".popup")));
});

/*настройка Профиля*/
const handleClickEditProfileButton = () => {
  profileForm.elements.name.value = profileTitle.textContent;
  profileForm.elements.description.value = profileDescription.textContent;
  avatarForm.link.value = profileAvatar.style.backgroundImage.slice(5, -2);
};

editProfileButton.addEventListener("click", () => {
  handleClickEditProfileButton();
  clearValidation(formEditProfile, validationConfig);
  openModal(editProfilePopup);
});

function handleProfileFormSubmit(event) {
  event.preventDefault();
  renderLoading(true, profileSubmitButton);

  updateUserProfile({
    name: profileForm.elements.name.value,
    about: profileForm.elements.description.value,
  })
    .then((updatedProfile) => {
      fillProfileData(updatedProfile);
      closeModal(editProfilePopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, profileSubmitButton);
    });
}

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

/*настройка Аватара*/
profileAvatar.addEventListener("click", () => {
  handleClickEditProfileButton();
  clearValidation(formEditAvatar, validationConfig);
  openModal(editAvatarPopup);
});

function handleAvatarFormSubmit(event) {
  event.preventDefault();
  renderLoading(true, avatarSubmitButton);

  updateUserAvatar(avatarForm.link.value)
    .then((updatedProfile) => {
      fillProfileData(updatedProfile);
      closeModal(editAvatarPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, avatarSubmitButton);
    });
}

formEditAvatar.addEventListener("submit", handleAvatarFormSubmit);

addProfileButton.addEventListener("click", () => {
  cardForm.reset();
  clearValidation(formNewCard, validationConfig);
  openModal(newProfileCardPopup);
});

function handleCardFormSubmit(event) {
  event.preventDefault();
  renderLoading(true, cardSubmitButton);

  const inputName = cardForm.elements["place-name"].value;
  const inputUrl = cardForm.elements.link.value;

  apiCreateCard({ name: inputName, link: inputUrl })
    .then((card) => {
      placesList.prepend(
        createCard(
          card,
          userId,
          cardTemplate,
          putLikeCard,
          deleteLikeCard,
          handleImageClick,
          apiDeleteCard
        )
      );
      cardForm.reset();
      closeModal(newProfileCardPopup);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, cardSubmitButton);
    });
}

formNewCard.addEventListener("submit", handleCardFormSubmit);

function handleImageClick(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openModal(imagePopup);
}

function loadInitialCards(location, userDataId, initialCards) {
  initialCards.forEach((card) => {
    location.append(
      createCard(
        card,
        userDataId,
        cardTemplate,
        putLikeCard,
        deleteLikeCard,
        handleImageClick,
        apiDeleteCard
      )
    );
  });
}

/*Настройка Инициализации*/

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userInfo, initialCards]) => {
    fillProfileData(userInfo);
    userId = userInfo._id;

    loadInitialCards(placesList, userInfo._id, initialCards);
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(validationConfig);
