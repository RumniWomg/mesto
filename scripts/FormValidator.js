//Валидация форм
export class FormValidator {
//Функция определяет span с ошибкой и добавляет в него текст из validationMessage, а так же присваивает класс инпуту.
showInputError = (formElement, inputElement, errorMessage, parameters) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(parameters.errorClass);
  errorElement.textContent = errorMessage;
};

//Функция определяет span с ошибкой и убирает из него текст с ошибкой, а так же удаляет класс инпута.
hideInputError = (formElement, inputElement, parameters) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(parameters.errorClass);
  errorElement.textContent = '';
};

//Проверка валидации в полях формы
checkInputValidity = (formElement, inputElement, parameters) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, parameters);
  } else {
    hideInputError(formElement, inputElement, parameters);
  }
};

//Находит все поля с инпутами и вешает на них слушатель. Запускает проверку валидации и переключатель кнопки.
setEventListeners = (formElement, parameters) => {
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
hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

//Переключатель кнопки из состояния disabled в active
toggleButtonState = (inputList, buttonElement, parameters) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(parameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');

  } else {
    buttonElement.classList.remove(parameters.inputErrorClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

disableSubmitButton = (element) => {
  const buttonsSubmit = element.querySelector('.popup__btn')
  buttonsSubmit.setAttribute('disabled', 'disabled');
  buttonsSubmit.classList.add('popup__btn_inactive');
};

//Функция запуска валидации
enableValidation = (parameters) => {
  const formsList = Array.from(document.querySelectorAll(parameters.formSelector));

  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, parameters);
  });
  
};

//Очистка полей ввода и удаление признакка ошибки.
resetFormCondition = (element) => {
  const form = element.querySelector('.form')
  const spanError = Array.from(document.querySelectorAll('.popup__error'));
  const inputError = Array.from(document.querySelectorAll('.popup__input'));

  spanError.forEach((errorSpan) => {
    errorSpan.textContent = '';
  })

  inputError.forEach((errorinput) => {
    errorinput.classList.remove('popup__input_error')
  });

  form.reset()

  disableSubmitButton(buttonsSubmit)
};
};