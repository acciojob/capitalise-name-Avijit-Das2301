//your JS code here. If required.
const nameInput=document.getElementById("fname");
nameInput.addEvemtListener("blur",function () {
	nameInput.value=nameInput.value.toUpperCase();	
});