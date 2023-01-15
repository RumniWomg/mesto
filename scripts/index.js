import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {initialCards, parameters, popups, popupProfile, buttonOpenEditProfilePopup, buttonCloseEditProfilePopup, 
  formElementProfile, nameInputProfile, jobInputProfile, profileTitle, profileSubtitle, buttonClosePicturePopup, 
  imageCaption, picture, popupCard, buttonOpenAddCardPopup, buttonCloseAddCardPopup, formElementCard, cardContainer} from "./constants.js";


function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#card-template');
  const cardContainerElement = card.generateCard();

  return cardContainerElement;
}

initialCards.forEach((item) => { //загрузка карточек на страницу
  cardContainer.append(createNewCard(item));
});

// Попап для редактирования профиля

popups.forEach((popup) => {  // закрытие попап кликом на крестик и оверлей
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup)
    }
  })
})

const escapeClosePopup = (e) => {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

export const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', escapeClosePopup);
}

export const closePopup = function (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeClosePopup);
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInputProfile.value;
  profileSubtitle.textContent = jobInputProfile.value;
  closePopup(popupProfile);
}

buttonOpenEditProfilePopup.addEventListener('click', function() {
  openPopup(popupProfile);
  disableSubmitButton(popupProfile);
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
});
buttonCloseEditProfilePopup.addEventListener('click', function() {
  closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

// Попап с картинкой

buttonClosePicturePopup.addEventListener('click', function() {
  closePopup(popupPicture)
})

// Попап для добалвения карточки

const formSubmitHandlerCard = (evt) => {
  evt.preventDefault();
  const newCardElements = { name: nameInputCard.value, link: linkInputCard.value };
  cardContainer.prepend(createNewCard(newCardElements));

  formElementCard.reset();

  closePopup(popupCard);
}

buttonOpenAddCardPopup.addEventListener('click', function() {
  openPopup(popupCard);
  resetFormCondition(popupCard);
  disableSubmitButton(popupCard);
});
buttonCloseAddCardPopup.addEventListener('click', function() {
  closePopup(popupCard);
  formElementCard.reset();
});

formElementCard.addEventListener('submit', formSubmitHandlerCard);