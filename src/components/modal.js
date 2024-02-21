export { openModal, closeModal};

function openModal (Popup){
    Popup.classList.add('popup_is-opened');

    document.addEventListener('keydown', event => closeWithEsc(event, Popup));
    Popup.addEventListener('click', event => closeWithOverlay(event, Popup));
};

function closeModal(Popup) {
    Popup.classList.remove('popup_is-opened');

    document.removeEventListener('keydown', event => closeWithEsc(event, Popup));
    Popup.removeEventListener('click', event => closeWithOverlay(event, Popup));
}

function closeWithEsc(event, Popup){
    if(event.key === 'Escape'){
        closeModal(Popup);
    }
}

function closeWithOverlay(event, Popup) {
    if (event.target === Popup) {
        closeModal(Popup);
    }
}