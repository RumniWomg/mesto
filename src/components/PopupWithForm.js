import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelector('.form');
  }

  close() {
    this._form.reset();
    super.close();
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    const initialText = this._popupBtn.textContent;
    
    this._form.addEventListener('submit', (e) => {
      e.preventDefault();
      this._popupBtn.textContent = 'Сохранение...';
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
          .finally(() => {
            this._popupBtn.textContent = initialText;
          })
    });
  }
}