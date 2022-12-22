
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

popups.forEach((popup) => {  // закрытие попап кликом на крестик и оверлей
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close-icon')) {
      closePopup(popup)
    }
  })
})

const escapeClosePopup = (e) => {
  if (e.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

const openPopup = (element) => {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', escapeClosePopup);
}

const closePopup = function (element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', escapeClosePopup);
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInputProfile.value;
  profileSubtitle.textContent = jobInputProfile.value;
  closePopup(popupProfile);
}

buttonOpenEditProfilePopup.addEventListener('click', function() {
  openPopup(popupProfile);
  disableSubmitButton(popupProfile);
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
});
buttonCloseEditProfilePopup.addEventListener('click', function() {
  closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

// Попап с картинкой
const popupPicture = document.querySelector('.popup_picture'); // Фон попап окна
const buttonClosePicturePopup = document.querySelector('.popup__close-icon_picture'); // Кнопка для скрытия окна
const imageCaption = popupPicture.querySelector('.popup__image-caption');
const picture = popupPicture.querySelector('.popup__image');

const openImagePopup = (newCard) => {
  const pictureSrc = newCard.path[0].src;
  const pictureAlt = newCard.path[0].alt;
  
  picture.setAttribute('src', pictureSrc);
  picture.setAttribute('alt', pictureAlt);
  imageCaption.textContent = pictureAlt;

  openPopup(popupPicture);
  resetFormCondition(popupPicture);
}

buttonClosePicturePopup.addEventListener('click', function() {
  closePopup(popupPicture)
})

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

const handleChecklike = (event) => {
  event.stopImmediatePropagation();
  event.target.closest('.grid-places__like').classList.toggle('grid-places__like_active');
}

const handleDelete = (evt) => {
  evt.target.closest('.grid-places__item').remove();
}

const generateCard = (dataCard) => {
  const newCard = cardTempalte.cloneNode(true);

  const title = newCard.querySelector('.grid-places__text');
  title.textContent = dataCard.name;

  const image = newCard.querySelector('.grid-places__image');
  image.setAttribute('src', dataCard.link);

  const altAttribute = newCard.querySelector('.grid-places__image');
  altAttribute.setAttribute('alt', dataCard.alt);

  const checkLike = newCard.querySelector('.grid-places__like');
  checkLike.addEventListener('click', handleChecklike)

  const deleteCard = newCard.querySelector('.grid-places__trash');
  deleteCard.addEventListener('click', handleDelete)

  image.addEventListener('click', openImagePopup)

  return newCard
}

const formSubmitHandlerCard = (evt) => {
  evt.preventDefault();
  renderCard({ name: nameInputCard.value, link: linkInputCard.value });
  formElementCard.reset();

  closePopup(popupCard);
}

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

buttonOpenAddCardPopup.addEventListener('click', function() {
  openPopup(popupCard);
  resetFormCondition(popupCard);
  disableSubmitButton(popupCard);
});
buttonCloseAddCardPopup.addEventListener('click', function() {
  closePopup(popupCard);
});

formElementCard.addEventListener('submit', formSubmitHandlerCard);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

