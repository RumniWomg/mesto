import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {initialCards, parameters, popups, popupProfile, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, profileTitle, profileSubtitle, popupCard, buttonOpenAddCardPopup, buttonCloseAddCardPopup, formElementCard, 
  cardContainer, nameInputCard, linkInputCard, imageCaption, picture, popupPicture} from "./constants.js";

function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#card-template', handleCardClick);
  const cardContainerElement = card.generateCard();

  return cardContainerElement;
}

function handleCardClick (name, link) {
  imageCaption.textContent = name;
  picture.src = link;
  picture.alt = name;
  
  openPopup(popupPicture);
}

initialCards.forEach((item) => { //загрузка карточек на страницу
  cardContainer.append(createNewCard(item));
});

const formAddValidator = new FormValidator(parameters, formElementCard); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(parameters, formElementProfile); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();

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

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInputProfile.value;
  profileSubtitle.textContent = jobInputProfile.value;
  closePopup(popupProfile);
}

buttonOpenEditProfilePopup.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
});

formElementProfile.addEventListener('submit', handleProfileFormSubmit);

const handleCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCardElements = { name: nameInputCard.value, link: linkInputCard.value };
  cardContainer.prepend(createNewCard(newCardElements));

  closePopup(popupCard);
}

buttonOpenAddCardPopup.addEventListener('click', () => {
  openPopup(popupCard);
  formAddValidator.resetFormCondition();
});

buttonCloseAddCardPopup.addEventListener('click', () => {
  closePopup(popupCard);
});

formElementCard.addEventListener('submit', handleCardFormSubmit);