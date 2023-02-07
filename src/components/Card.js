export class Card {
  constructor(data, templateSelector, handleCardClick, handleTrashClick) {
    this._title = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
  }
  
  _getTemplate() {
    const photoGridElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.grid-places__item')
      .cloneNode(true);

    return photoGridElement;
  }
  
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.grid-places__text').textContent = this._title;
    this._likeButton = this._element.querySelector('.grid-places__like');

    this._cardImage = this._element.querySelector('.grid-places__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._setEventListener();
    return this._element;
  }

  _handleChecklike() {
    this._likeButton.classList.toggle('grid-places__like_active');
  }
  
  _handleDelete() {
    this._element.remove();
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._handleChecklike();
    });
  
    this._element.querySelector('.grid-places__trash').addEventListener('click', () => {
      // this._handleDelete();
      this._handleTrashClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }
}