// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placeslist = document.querySelector('.places__list');
// @todo: Функция создания карточки
initialCards.forEach (function (element){
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__title').textContent = element.name;

    placeslist.append(cardElement);

    const deleteButton = document.querySelector('.card__delete-button');
});


// @todo: Функция удаления карточки

deleteButton.addEventListener('click', function () {
    // ???
  }); 
// @todo: Вывести карточки на страницу
