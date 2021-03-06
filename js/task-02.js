const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulEl = document.querySelector("#ingredients");

const createItem = [...ingredients].map((item) => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.textContent = item;
  return newItem;
});

ulEl.append(...createItem);
