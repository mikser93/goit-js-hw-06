// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку 
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const numberOfCat = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCat.length}`);

const catTitle = document.querySelectorAll('ul#categories > li.item');
catTitle.forEach(elem =>
  console.log(`Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`)
);
