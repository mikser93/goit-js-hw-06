// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку 
// на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorHex = document.querySelector('.color');

btn.addEventListener('click', handlerBtn);

function handlerBtn () {
body.style.backgroundColor = getRandomHexColor();
colorHex.textContent = getRandomHexColor();
}