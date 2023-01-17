import {openPopup} from "./index.js"
import {cardTempalte, popupPicture, imageCaption, picture} from "./constants.js"

export class Card {
  constructor(data, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._alt = data.alt;
    this._templateSelector = templateSelector;
  }
  
  generateCard() {
    this._element = cardTempalte.cloneNode(true);
    this._setEventListener();
    this._element.querySelector('.grid-places__text').textContent = this._title;
  
    const elementImage = this._element.querySelector('.grid-places__image');
    elementImage.src = this._image;
    elementImage.alt = this._alt;
  
    return this._element;
  }

  _handleChecklike() {
    this._element.querySelector('.grid-places__like').classList.toggle('grid-places__like_active');
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
    this._element.querySelector('.grid-places__like').addEventListener('click', () => {
      this._handleChecklike();
    });
  
    this._element.querySelector('.grid-places__trash').addEventListener('click', () => {
      this._handleDelete();
    });

    this._element.querySelector('.grid-places__image').addEventListener('click', () => {
      this._openImagePopup();
    });
  };
}