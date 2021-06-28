// -- ПЕРЕМЕННЫЕ
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


// -- ЭЛЕМЕНТЫ
const bodyEl = document.querySelector('body');
const inputEl = document.querySelector('#theme-switch-toggle');


// -- СМЕНА ТЕМЫ ПРИ КЛИКЕ
inputEl.addEventListener('change', changeTheme);
function changeTheme() {

  if (inputEl.checked) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK)
  }

  else {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};


// -- ДОБАВЛЕНИЕ КЛАССА НА БОДИ
const localStorageTheme = localStorage.getItem('theme');

localTheme()
function localTheme() {
  
  if (localStorageTheme === null) {
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }

  else if (localStorageTheme === Theme.LIGHT) {
    bodyEl.classList.add(Theme.LIGHT);
    bodyEl.classList.remove(Theme.DARK);
  }

  else if (localStorageTheme === Theme.DARK) {
    bodyEl.classList.add(Theme.DARK);
    bodyEl.classList.remove(Theme.LIGHT);
    inputEl.checked = true;
  }
}