const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    window.alert("All form fields must be filled in");
  } else {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    form.reset();
  }
});
