//Валидация форм

//Функция определяет span с ошибкой и добавляет в него текст из validationMessage, а так же присваивает класс инпуту.
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
};

//Функция определяет span с ошибкой и убирает из него текст с ошибкой, а так же удаляет класс инпута.
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.textContent = '';
};

//Проверка валидации в полях формы
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Находит все поля с инпутами и вешает на них слушатель. Запускает проверку валидации и переключатель кнопки.
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__btn');
  
  toggleButtonState(inputList, buttonElement);
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

//Проверка валидации, возвращает true или false
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

//Переключатель кнопки из состояния disabled в active
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__btn_inactive');
    buttonElement.setAttribute('disabled', 'disabled');

  } else {
    buttonElement.classList.remove('popup__btn_inactive');
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

//Функция запуска валидации
const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll('.form'));

  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
  
};

enableValidation();