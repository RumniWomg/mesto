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

// Попап для редактирования профиля
const popupProfile = document.querySelector('.popup_profile'); // Фон попап окна
const PopupProfileOpenButton = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const PopupProfileCloseButton = document.querySelector('.popup__close-icon_profile'); // Кнопка для скрытия окна
const formElementProfile = document.querySelector('.popup__form-edit')
const nameInputProfile = document.querySelector('.popup__input_field_name')
const jobInputProfile = document.querySelector('.popup__input_field_aboutme')
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const openPopup = function (element) {
  element.classList.add('popup_opened');
}

const closePopup = function (element) {
  element.classList.remove('popup_opened');
}

function formSubmitHandlerProfile (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInputProfile.value;
  profileSubtitle.textContent = jobInputProfile.value;
  closePopup(popupProfile);
}

PopupProfileOpenButton.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInputProfile.value = profileTitle.textContent;
  jobInputProfile.value = profileSubtitle.textContent;
});
PopupProfileCloseButton.addEventListener('click', function() {
  closePopup(popupProfile);
});

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);


// Попап для добалвения карточки
const popupCard = document.querySelector('.popup_card'); // Фон попап окна
const PopupCardOpenButton = document.querySelector('.profile__add-button'); // Кнопкa для показа окна
const PopupCardCloseButton = document.querySelector('.popup__close-icon_card'); // Кнопка для скрытия окна
const formElementCard = document.querySelector('.form-edit');
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
  evt.stopImmediatePropagation();
  evt.target.closest('.grid-places__item').remove();
}


const generateCard = (dataCard) => {
  const newCard = cardTempalte.cloneNode(true);

  const title = newCard.querySelector('.grid-places__text');
  title.textContent = dataCard.name;

  const image = newCard.querySelector('.grid-places__image');
  image.setAttribute('src', dataCard.link);

  const checkLike = newCard.querySelector('.grid-places__like');
  checkLike.addEventListener('click', handleChecklike)

  const deleteCard = newCard.querySelector('.grid-places__trash');
  deleteCard.addEventListener('click', handleDelete)

  return newCard
}

const formSubmitHandlerCard = (evt) => {
  evt.preventDefault();
  renderCard({ name: nameInputCard.value, link: linkInputCard.value });
  nameInputCard.value = '';
  linkInputCard.value = '';

  closePopup(popupCard);
}

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

PopupCardOpenButton.addEventListener('click', function() {
  openPopup(popupCard);
});
PopupCardCloseButton.addEventListener('click', function() {
  closePopup(popupCard);
});

formElementCard.addEventListener('submit', formSubmitHandlerCard);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});



// Попап с картинкой
const popupPicture = document.querySelector('.popup_picture'); // Фон попап окна
const PopupPictureCloseButton = document.querySelector('.popup__close-icon_picture'); // Кнопка для скрытия окна
const figcptn = document.querySelector('.popup__figcptn');
const picture = document.querySelector('.popup__image');


const popapImage = (event) => {
  const pictureSrc = event.target.closest('.grid-places__image').getAttribute('src');
  const textContentPicture = event.target.parentElement.querySelector('.grid-places__text').textContent;
  
  picture.setAttribute('src', pictureSrc);
  figcptn.textContent = textContentPicture;

  openPopup(popupPicture);
}


PopupPictureCloseButton.addEventListener('click', function() {
  closePopup(popupPicture)
})
cardContainer.addEventListener('click', popapImage)