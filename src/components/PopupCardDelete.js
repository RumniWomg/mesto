import Popup from "./Popup.js";

export class PopupCardDeleter extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._btn = this._popup.querySelector('.popup__btn');
  }

  setSubmitAction(action) {
    this._handleFormSubmit = action;
  }

  setEventListeners() {
    this._popup.addEventListener('submit', (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    })
    super.setEventListeners();
  }
}