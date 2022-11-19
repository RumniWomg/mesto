let popup = document.querySelector('.popup'); // Фон попап окна
let openPopupButton = document.querySelector('.author__edit-button'); // Кнопкa для показа окна
let closePopupButton = document.querySelector('.popup__close-icon'); // Кнопка для скрытия окна

let openPopup = function () {
  popup.classList.add('popup_opened');
  username.value = profileTitle.textContent;
  aboutme.value = profileSubtitle.textContent;
}

let closePopup = function () {
  popup.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__field_name')
let jobInput = document.querySelector('.popup__field_aboutme')
let profileTitle = document.querySelector('.author__title');
let profileSubtitle = document.querySelector('.author__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitle.textContent = username.value;
  profileSubtitle.textContent = aboutme.value;

  closePopup();
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);