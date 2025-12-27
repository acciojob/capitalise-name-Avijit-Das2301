const nameInput = document.getElementById("fname");

nameInput.addEventListener("blur", function () {
  nameInput.value = nameInput.value.toUpperCase();
});
