//На рядку 29 поточного документу обнуляю вміст інпуту при руйнуванні боксів. В ТЗ такого завдання не було, але це здається логічним. Дякую за увагу! 🐼🐼🐼

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("div > input"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  const boxesCollection = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    boxesCollection.push(document.createElement("div"));
    boxesCollection[i].style.width = `${boxSize}px`;
    boxesCollection[i].style.height = `${boxSize}px`;
    boxesCollection[i].style.backgroundColor = getRandomHexColor();
    boxSize += 10;
  }
  refs.boxesContainer.append(...boxesCollection);
}

const destroyBoxes = () => {
  refs.boxesContainer.innerHTML = "";
  refs.inputEl.value = "";
};

refs.btnCreate.addEventListener("click", function () {
  createBoxes(Number(refs.inputEl.value));
});
refs.btnDestroy.addEventListener("click", destroyBoxes);
