import './pages/index.css';

import card_1Image from './images/card_1.jpg';
import card_2Image from './images/card_2.jpg';
import card_3Image from './images/card_3.jpg';
import { editButton, saveButton, editForm } from './components/modal.js';

import avatarImage from './images/avatar.jpg';

const profileImage = document.querySelector('.profile__image');
profileImage.style.backgroundImage = `url(${avatarImage})`;

import {createCard, deleteCard, placeslist} from './components/card.js';
import { initialCards } from './scripts/cards.js';
//*import { openEditProfileModal, handleProfileForm, handleSaveButtonClick } from './components/modal.js';

/*Отображение карточек на странице*/

function loadInitialCards() {
  initialCards.forEach(element => {
    const cardElement = createCard(element, deleteCard);
    placeslist.append(cardElement);
  });
}

loadInitialCards();

/*Обработчки событий*/

//*editButton.addEventListener('click', openEditProfileModal);
//*editForm.addEventListener('submit', handleProfileForm);
//*saveButton.addEventListener('click', handleSaveButtonClick);

//*editButton.addEventListener('click', openEditProfileModal);
//*closeButton.addEventListener('click', closeEditProfileModal);