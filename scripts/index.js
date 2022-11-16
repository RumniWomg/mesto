let popup = document.querySelector('.popup'); // Фон попап окна
let popupctnr = document.querySelector('.popup__container'); // Само окно
let openPopupButton = document.querySelector('.author__edit-button'); // Кнопкa для показа окна
let closePopupButton = document.querySelector('.popup__close-icon'); // Кнопка для скрытия окна

openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('popup_opened'); // добавили модификатор блоку popup
})

closePopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('popup_opened'); // удалили модификатор
})

let footerAuthorsBg = document.querySelector('.footer__authors_bg'); // Фон окна
let footerAuthors = document.querySelector('.footer__authors'); // Само окно
let openAuthorsButton = document.querySelector('.footer__copyright'); // Кнопкa для показа окна
let closeAuthorButton = document.querySelector('.footer__close-icon'); // Кнопка для скрытия окна

openAuthorsButton.addEventListener('click', (e) => {
  e.preventDefault();
  footerAuthorsBg.classList.add('footer__authors_bg_active');
})

openAuthorsButton.addEventListener('click', (e) => {
  e.preventDefault();
  footerAuthors.classList.add('footer__authors_active');
})

closeAuthorButton.addEventListener('click', () => {
    footerAuthorsBg.classList.remove('footer__authors_bg_active'); // Убираем активный класс с фона
    footerAuthors.classList.remove('footer__authors_active'); // И с окна
});


// Находим форму в DOM
let formElement = document.querySelector('.')
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__field_1')
let jobInput = document.querySelector('.popup__field_2')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);