//Валидация форм
export class FormValidator {
  constructor(parameters, formElement) {
    this._formElement = formElement;
    this._errorClass = parameters.errorClass;
    this._inputSelector = parameters.inputSelector;
    this._inputErrorClass = parameters.inputErrorClass;
    this._submitButtonSelector = parameters.submitButtonSelector;
    this._inactiveButtonClass = parameters.inactiveButtonClass;
    this._inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    this._errorList = Array.from(
      formElement.querySelectorAll(this._inputErrorClass)
    );
    this._buttonElement = formElement.querySelector(this._submitButtonSelector);
  }
  
  //Очистка полей ввода, удаление признакка ошибки и блокировка кнопки
  resetFormCondition () {
    this._errorList.forEach((errorSpan) => {
      errorSpan.textContent = '';
    });

    // this._inputList.forEach((errorField) => {
    //   errorField.value = '';
    // });
  
    this._inputList.forEach((errorInput) => {
      errorInput.classList.remove(this._errorClass)
    });
  
    this._toggleButtonState();
  };

  //Функция определяет span с ошибкой и добавляет в него текст из validationMessage, а так же присваивает класс инпуту.
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  //Функция определяет span с ошибкой и убирает из него текст с ошибкой, а так же удаляет класс инпута.
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  };

  //Проверка валидации в полях формы
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  //Проверка валидации, возвращает true или false
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  //Переключатель кнопки из состояния disabled в active
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.disabled = "disabled";
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = "";
    }
  }

  //Находит все поля с инпутами и вешает на них слушатель. Запускает проверку валидации и переключатель кнопки.
  _setEventListeners() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  //Функция запуска валидации
  enableValidation() {
    this._setEventListeners();
  }
}
