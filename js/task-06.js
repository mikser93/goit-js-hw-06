// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже 
// додали у вихідні файли завдання.

const inputVal = document.querySelector("#validation-input");
inputVal.addEventListener("blur", validCheck);

function validCheck() {
  if (inputVal.value.length === Number(inputVal.dataset.length)) {
    inputVal.classList.add("valid");
    inputVal.classList.remove("invalid");
  } else {
    inputVal.classList.remove("valid");
    inputVal.classList.add("invalid");
  }
}