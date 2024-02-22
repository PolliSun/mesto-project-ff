export { openModal, closeModal };

function openModal(popup) {
  popup.classList.add("popup_is-opened");

  popup.closeWithEsc = (event) => escapeKeyPress(event, popup);
  document.addEventListener("keydown", popup.closeWithEsc);

  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      closeModal(popup);
    }
  });
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");

  document.removeEventListener("keydown", popup.closeWithEsc);
}

function escapeKeyPress(event, popup) {
  if (event.key === "Escape") {
    closeModal(popup);
  }
}
