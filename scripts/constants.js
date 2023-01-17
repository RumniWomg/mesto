const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Архыз'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Челябинская область'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Камчатка'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Холмогорский район'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Байкал'
  }
];

const parameters = ({
  //formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__btn_inactive',
  errorClass: 'popup__input_error'
});

const popups = document.querySelectorAll('.popup');
// Попап для редактирования профиля
const popupProfile = document.querySelector('.popup_profile'); // Фон попап окна
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const buttonCloseEditProfilePopup = document.querySelector('.popup__close-icon_profile'); // Кнопка для скрытия окна
const formElementProfile = document.querySelector('.popup__form-profile')
const nameInputProfile = document.querySelector('.popup__input_field_name')
const jobInputProfile = document.querySelector('.popup__input_field_aboutme')
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
// Попап с картинкой
const popupPicture = document.querySelector('.popup_picture'); // Фон попап окна
const buttonClosePicturePopup = document.querySelector('.popup__close-icon_picture'); // Кнопка для скрытия окна
const imageCaption = popupPicture.querySelector('.popup__image-caption');
const picture = popupPicture.querySelector('.popup__image');
// Попап для добалвения карточки
const popupCard = document.querySelector('.popup_card'); // Фон попап окна
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button'); // Кнопкa для показа окна
const buttonCloseAddCardPopup = document.querySelector('.popup__close-icon_card'); // Кнопка для скрытия окна
const formElementCard = document.querySelector('.popup__form-card');
const nameInputCard = document.querySelector('.popup__input_mesto-name');
const linkInputCard = document.querySelector('.popup__input_picture');
const cardTempalte = document.querySelector('#card-template').content.querySelector('.grid-places__item');
const cardContainer = document.querySelector('.grid-places');
const listenerImage = document.querySelector('.grid-places__item');

export {initialCards, parameters, popups, popupProfile, buttonOpenEditProfilePopup, buttonCloseEditProfilePopup, 
  formElementProfile, nameInputProfile, jobInputProfile, profileTitle, profileSubtitle, buttonClosePicturePopup, 
  imageCaption, picture, popupCard, buttonOpenAddCardPopup, buttonCloseAddCardPopup, formElementCard, nameInputCard, 
  linkInputCard, cardTempalte, cardContainer, listenerImage, popupPicture}