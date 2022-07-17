const formEl = document.querySelector(".login-form");

const onFormSubmit = (event) => {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill the empty fields.");
  }

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`${name}: ${value}`);
  });

  event.currentTarget.reset();
};

formEl.addEventListener("submit", onFormSubmit);
