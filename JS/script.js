const form = document.querySelector("form");
const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.valididity.valid) {
    emailError.textContent = "";
    emailError.className = "Error";

} else{
  showError();
}

});

form.addEventListener("submit", (event) => {
  if (!email.valididity.valid){
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Looks like this is not an email";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "email@example.com";
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}