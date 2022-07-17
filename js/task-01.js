const categories = [...document.querySelectorAll("li.item")];

console.log(`Number of categories: ${categories.length}`);

const countCategories = (collection) => {
  console.log(`Elements: ${[...collection].length}`);
};

const showCategories = (callback) =>
  categories.map((category) => {
    const titleEl = category.querySelector("h2");
    const speciments = [...category.querySelectorAll("li")];
    console.log(`Category: ${titleEl.textContent}`);
    callback(speciments);
  });

showCategories(countCategories);
