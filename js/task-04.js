const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

function increaseValue() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decreaseValue() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

incrementBtn.addEventListener("click", increaseValue);
decrementBtn.addEventListener("click", decreaseValue);
