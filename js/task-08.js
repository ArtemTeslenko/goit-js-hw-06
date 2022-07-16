//455365
const formEl = document.querySelector(".login-form");
// const loginEl = formEl.firstElementChild;
// const loginInput = loginEl.firstElementChild;
// const passwordEl = loginEl.nextElementSibling;
// const passwordInput = passwordEl.firstElementChild;
// const buttonEl = formEl.lastElementChild;

const onFormSubmit = (event) => {
  event.preventDefault();
  //   const email = event.currentTarget.elements.email.value;
  //   const password = event.currentTarget.elements.password.value;

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(name, ": ", value);
    if (value === "") {
      return alert("Please fill the empty fields.");
    }
  });

  //   if (email === "" || password === "") {
  //     return alert("Please fill the empty fields.");
  //   }
  console.log(formData);
  console.log("form was sent");
};

formEl.addEventListener("submit", onFormSubmit);
