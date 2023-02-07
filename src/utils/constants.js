const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const validatorParameters = ({
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: '.popup__error',
  errorClass: 'popup__input_error',
});

// Попап для редактирования профиля
const buttonOpenEditProfilePopup = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const formElementProfile = document.querySelector('.popup__form-profile');
const nameInputProfile = document.querySelector('.popup__input_field_name');
const jobInputProfile = document.querySelector('.popup__input_field_aboutme');
// Попап для добалвения карточки
const buttonOpenAddCardPopup = document.querySelector('.profile__add-button'); // Кнопкa для показа окна
const formElementCard = document.querySelector('.popup__form-card');
const cardContainer = document.querySelector('.grid-places');
const buttonOpenAvatarEdit = document.querySelector('.profile__photo');
const formAvatar = document.querySelector('.popup__form-avatar');

export {initialCards, validatorParameters, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, buttonOpenAddCardPopup, formElementCard, cardContainer, buttonOpenAvatarEdit, formAvatar}