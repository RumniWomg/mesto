import './index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupCardDeleter } from '../components/PopupCardDelete.js';
import { api } from '../components/Api.js'
import {validatorParameters, buttonOpenEditProfilePopup, formElementProfile, nameInputProfile, 
  jobInputProfile, buttonOpenAddCardPopup, formElementCard, buttonOpenAvatarEdit, formAvatar, cardContainer} from "../utils/constants.js";

const profileInfo = new UserInfo({ // создаем экземпляр новых данных пользователя
  userNameInfo: '.profile__title',
  aboutMeInfo: '.profile__subtitle',
  userAvatar: '.profile__photo',
});

let userId

Promise.all([api.getUsersData(), api.getInitialCards()])
  .then(res => {
    const dataUser = res[0]
    const dataCard = res[1]
    userId = dataUser._id;
    profileInfo.setUserInfo(dataUser);  // загрузка данных о пользователе
    cardsList.renderItems(dataCard.reverse());   // загрузка карточек
  })
  .catch((err) => {
    console.log(err);
  });

  const popupCardDeleter = new PopupCardDeleter('.popup_card-delite'); // создаем экземпляр попап удаления карточки
  popupCardDeleter.setEventListeners();


function createNewCard(data) { // создаем новые карточки на основе класса
  const card = new Card({
    userId,
    data,
    templateSelector: '#card-template',
    handleCardClick: () => {                // открываем попап с картинкой
      popupPicture.open(data.name, data.link);
    },
    handleTrashClick: () => {          // удаляем карточку
      popupCardDeleter.open();
      popupCardDeleter.setSubmitAction(() => {
        popupCardDeleter.setLoadText('Удаление...');
        api.deleteCards(data._id)
          .then(res => {
            card.deleteCard(res)
            popupCardDeleter.close();
          })
          .then()
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            popupCardDeleter.setLoadText('Да')
          })
        });
    },
    handleLikeButtonClick: () => {  // ставим лайки
      api.putLikeCards(data._id)
        .then(res => {
          card.putLike()
          card.likeCount(res)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleDeleteLike: () => {   // удаляем лайки
      api.deleteLikeCards(data._id)
      .then(res => {
        card.deleteLike(data._id)
        card.likeCount(res)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });
  const cardContainerElement = card.generateCard();

  return cardContainerElement;
}

function handleProfileFormSubmit (data) { // обрабатываем форму редактировая профиля 
  return api.setUsersData(data)
    .then(res => {
      profileInfo.setUserInfo(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

function handleFormAvatarSubmit(data) { // добавляем аватар
  formAvatarValidator.resetFormCondition();
  return api.setAvatar(data)
    .then(res => {
      profileInfo.setUserAvatar(res);
    })
    .catch((err) => {
      console.log(err);
    })
}

function handleCardFormSubmit(data) { // добавляем карточку
  formAddValidator.resetFormCondition();
  return api.createCard(data)
    .then(res => {
      const arr = [res]
      cardsList.renderItems(arr);
    })
    .catch((err) => {
      console.log(err);
    })
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
  formAvatarValidator.resetFormCondition();
});

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

const popupCard = new PopupWithForm('.popup_card', handleCardFormSubmit); // создаем экземпляр попап добавления картинки
popupCard.setEventListeners();

const cardsList = new Section({  //загрузка карточек на страницу
    renderer: (data) => {
      cardsList.addItem(createNewCard(data));
    },
  },
  '.grid-places'
);

