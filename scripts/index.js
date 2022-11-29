const popupProfile = document.querySelector('.popup-profile'); // Фон попап окна профайла
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна профайла
const closePopupProfile = document.querySelector('.popup__close-icon'); // Кнопка для скрытия окна профайла
const formElementProfile = document.querySelector('.profile-form-edit') // форма профайла
const nameInputProfile = document.querySelector('.popup__input_field_name') // Инпут имени 
const jobInputProfile = document.querySelector('.popup__input_field_aboutme') // Инпут профессии 
const profileTitleProfile = document.querySelector('.profile__title'); // Тайтл профайла
const profileSubtitleProfile = document.querySelector('.profile__subtitle'); // Сабтайтл профайла


const openProfilePopup = function () {
  popupProfile.classList.add('popup_opened');
  username.value = profileTitleProfile.textContent;
  aboutme.value = profileSubtitleProfile.textContent;
}

const closeProfilePopup = function () {
  popupProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileTitleProfile.textContent = username.value;
  profileSubtitleProfile.textContent = aboutme.value;

  closeProfilePopup();
}

openPopupProfile.addEventListener('click', openProfilePopup);
closePopupProfile.addEventListener('click', closeProfilePopup);
formElementProfile.addEventListener('submit', formSubmitHandler);



const popup = document.querySelector('.popup-addmesto'); // Фон попап окна профайла
const openPopupB = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна профайла
const closePopupB = document.querySelector('.popup-addmesto__close-icon'); // Кнопка для скрытия окна профайла
const formElement = document.querySelector('.form-edit') // форма профайла
const nameInput = document.querySelector('.popup-addmesto__input_field_name') // Инпут имени 
const jobInput = document.querySelector('.popup-addmesto__input_field_aboutme') // Инпут профессии 
const profileTitle = document.querySelector('.popup-addmesto__title'); // Тайтл профайла
const profileSubtitle = document.querySelector('.popup-addmesto__subtitle'); // Сабтайтл профайла




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