let saveBtn=document.getElementById("saveBtn");

saveBtn.addEventListener("click", function() {
	let backgroundRadioButtonValue = document.querySelector('input[name="background"]:checked').value;
	let textRadioButtonValue = document.querySelector('input[name="textColor"]:checked').value;
	mainDiv.classList.toggle(backgroundRadioButtonValue);
	mainDiv.classList.toggle(textRadioButtonValue);
	saveBtn.setAttribute('data-dismiss', 'modal');
});