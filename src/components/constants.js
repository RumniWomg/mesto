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
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: '.popup__error',
  errorClass: 'popup__input_error',
});

// Попап для редактирования профиля
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const formElementProfile = document.querySelector('.popup__form-profile')
const nameInputProfile = document.querySelector('.popup__input_field_name')
const jobInputProfile = document.querySelector('.popup__input_field_aboutme')
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
// Попап для добалвения карточки
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button'); // Кнопкa для показа окна
const formElementCard = document.querySelector('.popup__form-card');
const cardContainer = document.querySelector('.grid-places');

export {initialCards, parameters, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, profileTitle, profileSubtitle, buttonOpenAddCardPopup, formElementCard, cardContainer}