const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

const changeName = () =>
  inputEl.value === ""
    ? (userNameEl.textContent = "Anonymous")
    : (userNameEl.textContent = inputEl.value);

inputEl.addEventListener("input", changeName);
