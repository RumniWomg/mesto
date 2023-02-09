import Popup from "./Popup.js";

export class PopupCardDeleter extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._handleDelete = handleDelete;
    this._btn = this._popup.querySelector('.popup__btn');
  }

  setEventListeners() {
    super.setEventListeners();

    this._btn.addEventListener('click', (e) => {
      e.preventDefault();
      this._handleDelete();
    });
  }
}