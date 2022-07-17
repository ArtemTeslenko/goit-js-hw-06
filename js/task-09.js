function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const spanEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", function () {
  const randColor = getRandomHexColor();
  spanEl.textContent = randColor;
  body.style.backgroundColor = randColor;
  console.log(randColor);
});
