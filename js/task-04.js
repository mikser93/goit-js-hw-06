// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на 
// одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

const incrementBtnClick = () => {
	counterValue += 1;
	value.textContent = counterValue;
};

const decrementBtnClick = () => {
	counterValue -= 1;
	value.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementBtnClick);
incrementBtn.addEventListener('click', incrementBtnClick);