export { openProfileModal, closeProfileModal};

function openProfileModal (Popup){
    Popup.classList.add('popup_is-opened');
};

function closeProfileModal(Popup) {
    Popup.classList.remove('popup_is-opened');
}
