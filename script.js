//your JS code here. If required.

const nameInput = document.getElementById("fname");

// Convert to uppercase as the user types
nameInput.addEventListener("input", function () {
  nameInput.value = nameInput.value.toUpperCase();
});
