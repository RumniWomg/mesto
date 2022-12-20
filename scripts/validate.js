//Валидация форм

//Функция определяет span с ошибкой и добавляет в него текст из validationMessage, а так же присваивает класс инпуту.
const showInputError = (formElement, inputElement, errorMessage, parameters) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(parameters.errorClass);
  errorElement.textContent = errorMessage;
};

//Функция определяет span с ошибкой и убирает из него текст с ошибкой, а так же удаляет класс инпута.
const hideInputError = (formElement, inputElement, parameters) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(parameters.errorClass);
  errorElement.textContent = '';
};

//Проверка валидации в полях формы
const checkInputValidity = (formElement, inputElement, parameters) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, parameters);
  } else {
    hideInputError(formElement, inputElement, parameters);
  }
};

//Находит все поля с инпутами и вешает на них слушатель. Запускает проверку валидации и переключатель кнопки.
const setEventListeners = (formElement, parameters) => {
  const inputList = Array.from(formElement.querySelectorAll(parameters.inputSelector));
  const buttonElement = formElement.querySelector(parameters.submitButtonSelector);
  
  toggleButtonState(inputList, buttonElement, parameters);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, parameters);

      toggleButtonState(inputList, buttonElement, parameters);
    });
  });
};

//Проверка валидации, возвращает true или false
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

//Переключатель кнопки из состояния disabled в active
const toggleButtonState = (inputList, buttonElement, parameters) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(parameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');

  } else {
    buttonElement.classList.remove(parameters.inputErrorClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

//Функция запуска валидации
const enableValidation = (parameters) => {
  const formsList = Array.from(document.querySelectorAll(parameters.formSelector));

  parameters.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, parameters);
  });
  
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__btn_inactive',
  errorClass: 'popup__input_error'
});