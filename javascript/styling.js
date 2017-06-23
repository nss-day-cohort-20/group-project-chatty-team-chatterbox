{

let styling = {};

// let darkThemeCheckbox = document.getElementById('darkTheme');
let largeTextCheckbox = document.getElementById('largeText');
let mainDiv = document.getElementById('pageWrapper');
let buttons = document.getElementsByTagName('button');
// let logoWhite= document.getElementById("logoWhite");
// let logoBlack= document.getElementById("logoBlack");

let saveBtn=document.getElementById("saveBtn");


// darkThemeCheckbox.addEventListener('change', function()
// {
// 	mainDiv.classList.toggle('theme');
// 	logoBlack.classList.toggle("isHidden");
// 	logoWhite.classList.toggle("isHidden");

// })

largeTextCheckbox.addEventListener('change', function()
{
	mainDiv.classList.toggle('largeText');
	for(let i=0; i<buttons.length; i++)
		{
			buttons[i].classList.toggle('buttonText');
		}
});


saveBtn.addEventListener("click", function() {
	let backgroundRadioButtonValue = document.querySelector('input[name="background"]:checked').value;
	let textRadioButtonValue = document.querySelector('input[name="textColor"]:checked').value;
	mainDiv.classList.toggle(backgroundRadioButtonValue);
	mainDiv.classList.toggle(textRadioButtonValue);
	saveBtn.setAttribute('data-dismiss', 'modal');
});

window.Chatty = window.Chatty || {};
Chatty.styling = styling;

}
