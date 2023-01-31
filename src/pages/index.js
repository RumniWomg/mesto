import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import {initialCards, validatorParameters, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, profileTitle, profileSubtitle, buttonOpenAddCardPopup, formElementCard, cardContainer} from "../utils/constants.js";

const profileInfo = new UserInfo({ // создаем экземпляр новых данных пользователя
  userNameInfo: profileTitle,
  aboutMeInfo: profileSubtitle
});

function handleProfileFormSubmit (object) { // обрабатываем форму редактировая профиля
  profileInfo.setUserInfo(object);
}
  
function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#card-template', handleCardClick);
  const cardContainerElement = card.generateCard();

  return cardContainerElement;
}

const formAddValidator = new FormValidator(validatorParameters, formElementCard); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();

const formEditValidator = new FormValidator(validatorParameters, formElementProfile); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();

const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit); // создаем экземпляр попап редактирования
popupProfile.setEventListeners();

const popupPicture = new PopupWithImage('.popup_picture'); // создаем экземпляр попап с картинкой
popupPicture.setEventListeners();

function handleCardClick (name, link) { // открытие попапа с картинкой
  popupPicture.open(name, link);
}

buttonOpenEditProfilePopup.addEventListener('click', () => { // открывает попап для редактирования профиля 
  popupProfile.open();
  formEditValidator.resetFormCondition();
  const userData = profileInfo.getUserInfo();
  nameInputProfile.value = userData.userNameInfo;
  jobInputProfile.value = userData.aboutMeInfo;
});

buttonOpenAddCardPopup.addEventListener('click', () => {
  formElementCard.reset();
  popupCard.open();
  formAddValidator.resetFormCondition();
});

const handleCardFormSubmit = (inputValues) => {
  const newCardData = { 
    name: inputValues['mesto-name'], 
    link: inputValues['link-picture']
  };
  cardContainer.prepend(createNewCard(newCardData));

  popupCard.close();
}

const popupCard = new PopupWithForm('.popup_card', handleCardFormSubmit); // создаем экземпляр попап добавления картинки
popupCard.setEventListeners();

const CardsList = new Section({  //загрузка карточек на страницу
  items: initialCards,
  renderer: (data) => {
    CardsList.addItem(createNewCard(data));
  },
},
  cardContainer
);
CardsList.renderItems();