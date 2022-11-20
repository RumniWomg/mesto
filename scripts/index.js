let popup = document.querySelector('.popup'); // Фон попап окна
let openPopupButton = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
let closePopupButton = document.querySelector('.popup__close-icon'); // Кнопка для скрытия окна
let formElement = document.querySelector('.form-edit')
let nameInput = document.querySelector('.popup__input_field_name')
let jobInput = document.querySelector('.popup__input_field_aboutme')
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


let openPopup = function () {
  popup.classList.add('popup_opened');
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
}

let closePopup = function () {
  popup.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);