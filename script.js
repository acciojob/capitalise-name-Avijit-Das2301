//your JS code here. If required.

// Get the input element with id="fname"
const nameInput = document.getElementById("fname");

// When the input field loses focus, convert its content to uppercase
nameInput.addEventListener("blur", function () {
  nameInput.value = nameInput.value.toUpperCase();
});
