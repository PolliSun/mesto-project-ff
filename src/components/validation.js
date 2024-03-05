export { enableValidation, clearValidation };

//formSelector: '.popup__form',
//inputSelector: '.popup__input',
//submitButtonSelector: '.popup__button',
//inactiveButtonClass: 'popup__button_disabled',
//inputErrorClass: 'popup__input_type_error',
//errorClass: 'popup__error_visible'

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(
      formElement,
      validationConfig.inputSelector,
      validationConfig.submitButtonSelector,
      validationConfig.inactiveButtonClass,
      validationConfig.inputErrorClass,
      validationConfig.errorClass
    );
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);

  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      errorClass,
      inputErrorClass
    );
  } else {
    hideInputError(formElement, inputElement, errorClass, inputErrorClass);
  }
};

const toggleButtonState = (
  inputList,
  submitButtonElement,
  inactiveButtonClass
) => {
  if (hasInvalidInput(inputList)) {
    submitButtonElement.disabled = true;
    submitButtonElement.classList.add(inactiveButtonClass);
  } else {
    submitButtonElement.disabled = false;
    submitButtonElement.classList.remove(inactiveButtonClass);
  }
};

const setEventListeners = (
  formElement,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButtonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, submitButtonElement, inactiveButtonClass);
    });
  });
};

const clearValidation = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const submitButtonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  submitButtonElement.classList.add(validationConfig.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    hideInputError(formElement,inputElement,validationConfig.inputErrorClass,
      validationConfig.errorClass,
    );
    inputElement.setCustomValidity("");
  });
};
