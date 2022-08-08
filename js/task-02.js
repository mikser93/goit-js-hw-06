// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

// Порядок виконання:
// 1.створити константу в якій буде міститись список ul#ingredients
// 2.створити пустий масив
// 3.перебрати масив інгрідієнти
// 4.на кожній ітерації створить окремий елемент <li>.
// 5.Додасть назву інгредієнта як його текстовий вміст.
// 6.Додасть елементу клас item.
// 7.запушить в пустий масив всі елементи
// 8.вставить усі < li > за одну операцію у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingList = document.querySelector('ul#ingredients');
const newArr = [];
ingredients.forEach(ing => {
  let liItem = document.createElement('li');
  liItem.textContent = ing;
  liItem.classList.add('item');
  newArr.push(liItem);
});
ingList.append(...newArr);
