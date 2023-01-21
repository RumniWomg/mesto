import {openPopup} from "./index.js"
import {popupPicture, imageCaption, picture} from "./constants.js"

export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
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
    this._cardImage.alt = this._alt;
    this._setEventListener();

    return this._element;
  }

  _handleChecklike() {
    this._likeButton.classList.toggle('grid-places__like_active');
  }
  
  _handleDelete() {
    this._element.remove();
  }

  _openImagePopup() {
    imageCaption.textContent = this._title;
    picture.src = this._image;
    picture.alt = this._alt;
  
    openPopup(popupPicture);
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._handleChecklike();
    });
  
    this._element.querySelector('.grid-places__trash').addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._openImagePopup();
    });
  };
}