
// Попап для редактирования профиля
const popupProfile = document.querySelector('.popup_profile'); // Фон попап окна
const openPopupProfile = document.querySelector('.profile__edit-button'); // Кнопкa для показа окна
const closePopupProfile = document.querySelector('.popup__close-icon_profile'); // Кнопка для скрытия окна
const formElementProfile = document.querySelector('.popup__form-edit')
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
const formElementCard = document.querySelector('.form-edit');
const nameInputCard = document.querySelector('.popup__input_mesto-name');
const linkInputCard = document.querySelector('.popup__input_picture');
const cardTempalte = document.querySelector('#card-template').content.querySelector('.grid-places__item');
const cardContainer = document.querySelector('.grid-places');
const listenerImage = document.querySelector('.grid-places__item');

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


const openCardPopup = function () {
  popupCard.classList.add('popup_opened');
}

const closeCardPopup = function () {
  popupCard.classList.remove('popup_opened');
}

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

  closeCardPopup();
}

const renderCard = (dataCard) => {
  cardContainer.prepend(generateCard(dataCard));
};

openPopupCard.addEventListener('click', openCardPopup);
closePopupCard.addEventListener('click', closeCardPopup);
formElementCard.addEventListener('submit', formSubmitHandlerCard);

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});



// Попап с картинкой
const popupPicture = document.querySelector('.popup_picture'); // Фон попап окна
const closePopupPicture = document.querySelector('.popup__close-icon_picture'); // Кнопка для скрытия окна

const closePopapPicture = () => {
  popupPicture.classList.remove('popup_opened');
}

const popapImage = (event) => {
  const picture = document.querySelector('.popup__image');
  const pictureSrc = event.target.closest('.grid-places__image').getAttribute('src');
  const figcptn = document.querySelector('.popup__figcptn');
  const textContentPicture = event.target.parentElement.querySelector('.grid-places__text').textContent;
  
  picture.setAttribute('src', pictureSrc);
  figcptn.textContent = textContentPicture;

  popupPicture.classList.add('popup_opened');
}


closePopupPicture.addEventListener('click', closePopapPicture)
cardContainer.addEventListener('click', popapImage)