//*export { openEditProfileModal, handleProfileFormPopup, handleSaveButtonClick};
//*export {editButton, saveButton, editForm};

const editButton = document.querySelector('.profile__edit-button');
const editFormPopup = document.querySelector('.popup_type_edit');
const saveButton = document.querySelector('.popup__button');
const closeButton = editFormPopup.querySelector('.popup__close');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const inputName = editFormPopup.querySelector('.popup__input_type_name');
const inputDescription = editFormPopup.querySelector('.popup__input_type_description');

function openEditProfileModal (){
    editFormPopup.classList.add('popup_is-opened');
};

function closeEditProfileModal() {
    editFormPopup.classList.remove('popup_is-opened');
}

function handleProfileFormPopup (event){
    event.preventDefault();
    
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closeEditProfileModal() 
};

editButton.addEventListener('click', openEditProfileModal);
closeButton.addEventListener('click', closeEditProfileModal);
editFormPopup.addEventListener('submit', handleProfileFormPopup);