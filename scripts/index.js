
// Попап для редактирования профиля
const popupProfile = document.querySelector('.popup_profile'); // Фон попап окна
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const closePopupProfile = document.querySelector('.popup__close-icon_profile'); // Кнопка для скрытия окна
const formElementProfile = document.querySelector('.profile__form-edit')
const nameInputProfile = document.querySelector('.popup__input_field_name')
const jobInputProfile = document.querySelector('.popup__input_field_aboutme')
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const openPopupProf = function () {
  popupProfile.classList.add('popup_opened');
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
}

const closePopupProf = function () {
  popupProfile.classList.remove('popup_opened');
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInputProfile.value;
  profileSubtitle.textContent = jobInputProfile.value;
  closePopupProf();
}

openPopupProfile.addEventListener('click', openPopupProf);
closePopupProfile.addEventListener('click', closePopupProf);
formElementProfile.addEventListener('submit', formSubmitHandlerProfile);


// Попап для добалвения карточки
const popupCard = document.querySelector('.popup_card'); // Фон попап окна
const openPopupCard = document.querySelector('.profile__add-button'); // Кнопкa для показа окна
const closePopupCard = document.querySelector('.popup__close-icon_card'); // Кнопка для скрытия окна
const formElementCard = document.querySelector('.form-edit')
const nameInputCard = document.querySelector('.popup__input_field_name')
const jobInputCard = document.querySelector('.popup__input_field_aboutme')


const openCardPopup = function () {
  popupCard.classList.add('popup_opened');
}

const closeCardPopup = function () {
  popupCard.classList.remove('popup_opened');
}

function formSubmitHandlerCard (evt) {
  evt.preventDefault();
  

  closePopup();
}

openPopupCard.addEventListener('click', openCardPopup);
closePopupCard.addEventListener('click', closeCardPopup);
formElementCard.addEventListener('submit', formSubmitHandlerCard);
