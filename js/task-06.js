// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже 
// додали у вихідні файли завдання.

const validBtnEl = document.querySelector("#validation-input");
validBtnEl.addEventListener("blur", onBlurCheck); //событие + функция
function onBlurCheck() {
  if (validBtnEl.value.length === Number(validBtnEl.dataset.length)) {
    validBtnEl.classList.add("valid");
    validBtnEl.classList.remove("invalid");
  } else {
    validBtnEl.classList.remove("valid");
    validBtnEl.classList.add("invalid");
  }
}