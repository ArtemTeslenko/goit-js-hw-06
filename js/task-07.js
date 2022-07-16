const leverageEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const changeFontSize = (size) => (textEl.style.fontSize = `${size}px`);

leverageEl.addEventListener("input", function () {
  const leverageValue = Number(leverageEl.value);
  changeFontSize(leverageValue);
});
