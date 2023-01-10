const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

//.checkValidity method associated with form element.
function validateForm() {
  isValid = form.checkValidity();
  console.log(isValid);

  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }
}

function processFormData(e) {
  e.preventDefault();
  validateForm();
}

form.addEventListener("submit", processFormData);
