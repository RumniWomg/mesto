import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupCardDeleter } from '../components/PopupCardDelete.js';
import { api } from '../components/Api.js'
import {initialCards, validatorParameters, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, buttonOpenAddCardPopup, formElementCard, buttonOpenAvatarEdit, formAvatar} from "../utils/constants.js";

const profileInfo = new UserInfo({ // создаем экземпляр новых данных пользователя
  userNameInfo: '.profile__title',
  aboutMeInfo: '.profile__subtitle',
  userAvatar: '.profile__photo',
});

let userId

console.log(api.getUsersData())

Promise.all([api.getUsersData(), api.getInitialCards()])
  .then(res => {
    const dataUser = res[0]
    const dataCard = res[1]
    userId = dataUser._id;
    profileInfo.setUserInfo(dataUser)   // загрузка данных о пользователе
    cardsList.renderItems(dataCard)     // загрузка карточек
  })
  .catch((err) => {
    console.log(err);
  });

function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card(data, '#card-template', handleCardClick, handleTrashClick);
  const cardContainerElement = card.generateCard();

  return cardContainerElement;
}

function handleProfileFormSubmit (data) { // обрабатываем форму редактировая профиля 
  popupProfile.setLoadText('Сохранение...')
  api.setUsersData(data)
    .then(res => {
      profileInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.setLoadText('Сохранить')
    })
}

function handleFormAvatarSubmit(data) { // добавляем картинки и описание в форму попап
  popupProfileAvatar.setLoadText('Сохранение...')
  api.setAvatar(data)
    .then(res => {
      profileInfo.setUserAvatar(res);
      popupProfileAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfileAvatar.setLoadText('Сохранить')
    })
    formAvatar.resetValidation();
}

function handleCardClick (name, link) { // открытие попапа с картинкой
  popupPicture.open(name, link);
}

function handleTrashClick() { // открытие попапа для удаления карточки
  popupCardDeleter.open();
}

buttonOpenEditProfilePopup.addEventListener('click', () => { // открывает попап для редактирования профиля 
  popupProfile.open();
  formEditValidator.resetFormCondition();
  const userData = profileInfo.getUserInfo();
  nameInputProfile.value = userData.userNameInfo;
  jobInputProfile.value = userData.aboutMeInfo;
});

buttonOpenAddCardPopup.addEventListener('click', () => {
  popupCard.open();
  formAddValidator.resetFormCondition();
});

buttonOpenAvatarEdit.addEventListener('click', () => {
  popupProfileAvatar.open();
  formAvatar.resetFormCondition();
});

const handleCardFormSubmit = (inputValues) => {
  const newCardData = [{ 
    name: inputValues['mesto-name'], 
    link: inputValues['link-picture']
  }];

  const newCard = new Section({
    items: newCardData,
    renderer: (data) => {
      newCard.addItem(createNewCard(data));
    },
  },
  '.grid-places'
  );

  newCard.renderItems();

  popupCard.close();
}

const formAddValidator = new FormValidator(validatorParameters, formElementCard); // создаем экземпляр класса FormValidator
formAddValidator.enableValidation();
const formEditValidator = new FormValidator(validatorParameters, formElementProfile); // создаем экземпляр класса FormValidator
formEditValidator.enableValidation();
const formAvatarValidator = new FormValidator(validatorParameters, formAvatar);
formAvatarValidator.enableValidation();

const popupProfile = new PopupWithForm('.popup_profile', handleProfileFormSubmit); // создаем экземпляр попап редактирования
popupProfile.setEventListeners();

const popupProfileAvatar = new PopupWithForm('.popup_avatar-edit', handleFormAvatarSubmit); // создаем экземпляр попап редактирования аватара
popupProfileAvatar.setEventListeners();

const popupPicture = new PopupWithImage('.popup_picture'); // создаем экземпляр попап с картинкой
popupPicture.setEventListeners();

const popupCardDeleter = new PopupCardDeleter('.popup_card-delite'); // создаем экземпляр попап удаления карточки
popupCardDeleter.setEventListeners();

const popupCard = new PopupWithForm('.popup_card', handleCardFormSubmit); // создаем экземпляр попап добавления картинки
popupCard.setEventListeners();

const cardsList = new Section({  //загрузка карточек на страницу
    items: initialCards.reverse(),
    renderer: (data) => {
      cardsList.addItem(createNewCard(data));
    },
  },
  '.grid-places'
);
cardsList.renderItems();