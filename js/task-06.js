// В ТЗ написано, що при неправильній кількості символів колір бордера має бути червоним, в стилях на task-06.html, row 10-12 заданий сірий дефолтний бордер. В зв'язку з цим на рядку 16 поточного документу я забрав стилі для  бордеру, при умові, що поле для введення порожнє. Дякую за увагу!🦝🦝🦝

const inputEl = document.querySelector("#validation-input");
const availableLength = Number(inputEl.dataset.length);

const holdClass = (classNeed, element) => element.classList.add(classNeed);
const takeoffClass = (classNeed, element) =>
  element.classList.remove(classNeed);

const addClass = (string, available) =>
  string.length === available
    ? holdClass("valid", inputEl)
    : holdClass("invalid", inputEl);

const removeClass = (string, available) => {
  if (string.length === 0) {
    takeoffClass("invalid", inputEl);
    takeoffClass("valid", inputEl);
  } else if (string.length === available) {
    takeoffClass("invalid", inputEl);
  } else if (string.length !== available) {
    takeoffClass("valid", inputEl);
  }
};

inputEl.addEventListener("blur", function () {
  addClass(inputEl.value, availableLength);
  removeClass(inputEl.value, availableLength);
});
