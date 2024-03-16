const profileForm = document.forms["edit-profile"];
const cardForm = document.forms["new-place"];
const avatarForm = document.forms["edit-avatar"];
const deleteCardForm = document.forms["delete-card"];
const imagePopupBlock = document.querySelector(".popup_type_image");

const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileAvatar = document.querySelector(".profile__image");

const editProfileButton = document.querySelector(".profile__edit-button");
const addProfileButton = document.querySelector(".profile__add-button");

const editProfilePopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const editAvatarPopup = document.querySelector(".popup_type_avatar");
const deleteCardPopup = document.querySelector(".popup_type_delete-card");
const imagePopup = imagePopupBlock.querySelector(".popup__image");

const placesList = document.querySelector(".places__list");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".places__item");
const popupCaption = imagePopupBlock.querySelector(".popup__caption");

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const fillProfileData = ({ name, about, avatar }) => {
  profileTitle.textContent = name;
  profileDescription.textContent = about;
  profileAvatar.style.backgroundImage = `url(${avatar})`;
};

const handleClickEditProfileButton = () => {
  profileForm.elements.name.value = profileTitle.textContent;
  profileForm.elements.description.value = profileDescription.textContent;
  avatarForm.link.value = profileAvatar.style.backgroundImage.slice(5, -2);
};

const renderLoading = (
  isLoading,
  button,
  buttonText = "Сохранить",
  loadingText = "Сохранение..."
) => {
  button.textContent = isLoading ? loadingText : buttonText;
};

function handleSubmit(request, evt, loadingText = "Сохранение...") {
  evt.preventDefault();

  const submitButton = evt.submitter;
  const initialText = submitButton.textContent;

  renderLoading(true, submitButton, initialText, loadingText);
  request()
    .then(() => {
      evt.target.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, submitButton, initialText);
    });
}

export {
  profileForm,
  cardForm,
  avatarForm,
  deleteCardForm,
  imagePopupBlock,
  profileAvatar,
  editProfileButton,
  addProfileButton,
  editProfilePopup,
  newCardPopup,
  editAvatarPopup,
  deleteCardPopup,
  imagePopup,
  placesList,
  cardTemplate,
  popupCaption,
  validationConfig,
  fillProfileData,
  handleClickEditProfileButton,
  handleSubmit,
};
