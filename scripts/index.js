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

