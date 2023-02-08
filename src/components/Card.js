export class Card {
  constructor({ data, templateSelector, handleCardClick, handleTrashClick, handleLikeButtonClick, handleDeleteLike, userId }) {
    this._title = data.name;
    this._image = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleTrashClick = handleTrashClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
    this._handleDeleteLike = handleDeleteLike;
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
    this._element.querySelector('.grid-places__counter').textContent = `${this._likes.length}`;
    this._likeButton = this._element.querySelector('.grid-places__like');
    this._cardImage = this._element.querySelector('.grid-places__image');
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._setEventListener();
    this._likeClick()
    this._removeTrashBtn()
    return this._element;
  }

  _likeClick() {
    if (this._hasLike()) {
      this.putLike()
    } else {
      this.deleteLike()
    }
  }

  _hasLike() {
    return this._likes.find(like => like._id === this._userId)
  }

  likeCount(res) {
    this._element.querySelector('.grid-places__counter').textContent = `${res.likes.length}`;
  }

  putLike() {
    this._element.querySelector('.grid-places__like').classList.add('grid-places__like_active')
  }

  deleteLike() {
    this._element.querySelector('.grid-places__like').classList.remove('grid-places__like_active')
  }
  
  deleteCard = () => {
    this._element.remove();
    this._element = null;
  }

  _removeTrashBtn() {
    if (this._ownerId !== this._userId) {
      this._element.querySelector('.grid-places__trash').remove()
    }
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      if (this._element.querySelector('.grid-places__like').classList.contains('grid-places__like_active')) {
        this._handleDeleteLike()
      } else {
        this._handleLikeButtonClick()
      }
    });
  
    this._element.querySelector('.grid-places__trash').addEventListener('click', () => {
      this._handleTrashClick();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }
}