// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

const controlRange = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

controlRange.addEventListener("input", sizeChange);

function sizeChange() {
    textSize.style.fontSize = controlRange.value + "px";
  }
  