
//Здесь будет код валидации форм


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.classList.remove('popup__input_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
  
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__btn');
  
  toggleButtonState(inputList, buttonElement);
  
  
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      console.log(formElement);
      toggleButtonState(inputList, buttonElement);
    });
    console.log(inputElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
});
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__btn_inactive');
  } else {
    buttonElement.classList.remove('popup__btn_inactive');
  }
};

const enableValidation = () => {
  const formsList = Array.from(document.querySelectorAll('.form'));

  formsList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
    
    // const fieldsetList = Array.from(formElement.querySelectorAll('.form'));
    //   fieldsetList.forEach((fieldSet) => {
    //   setEventListeners(fieldSet);
    // });
    // console.log(formElement.querySelectorAll('.popup__input'))
  });
  
};

 enableValidation();