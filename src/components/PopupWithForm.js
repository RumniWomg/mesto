import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
    this._form = this._popup.querySelectorAll('.form'); // Может я не правильно ищу форму?? Но ведь "this._popup.querySelectorAll('.popup__input')" работает...
  }

  close() {
    this._inputList.forEach((errorField) => { // А зачем нам это делать? Ведь мы уже очищаем поля ввода в классе FormValidator. Кстати благодарю за разъеснение про контекст this)
      errorField.value = '';
    });
    super.close();
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => formValues[input.name] = input.value);
    
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (e) => { // У меня не выходит повесить слушатель на форму, ошибка "this._form.addEventListener is not a function"
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      super.close();
    });
  }
}