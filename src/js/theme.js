// -- ПЕРЕМЕННЫЕ
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


// -- ЭЛЕМЕНТЫ
const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('#theme-switch-toggle');


// -- ДОБАВЛЕНИЕ КЛАССА НА БОДИ
bodyEl.classList.add(Theme.LIGHT);


// -- СМЕНА ТЕМЫ ПРИ КЛИКЕ
inputEl.addEventListener('change', changeTheme);
function changeTheme() {

  if (inputEl.checked) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK)
  }

  else {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT)
  }
};


// -- ПЕРЕМЕННАЯ "ТЕМА" ИЗ localStorage
const localStorageTheme = localStorage.getItem('theme');


// -- ДОБАВЛЕНИЕ ТЕМЫ ИЗ localStorage
localTheme()
function localTheme() {
  if (localStorageTheme === Theme.LIGHT) {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  
  else {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    inputEl.checked = true;
  }
}