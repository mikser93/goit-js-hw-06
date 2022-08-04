const numberOfCat = document.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCat.length}`);

const catTitle = document.querySelectorAll('ul#categories > li.item');
catTitle.forEach((elem) =>
console.log(
`Category: ${elem.firstElementChild.textContent}
Elements: ${elem.lastElementChild.children.length}`
));

