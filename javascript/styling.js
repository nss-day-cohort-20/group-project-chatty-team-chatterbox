

let darkThemeCheckbox = document.getElementById('darkTheme');
let largeTextCheckbox = document.getElementById('largeText');
let mainDiv = document.getElementById('pageWrapper');
let buttons = document.getElementsByTagName('button');
let logoWhite= document.getElementById("logoWhite");
let logoBlack= document.getElementById("logoBlack");

darkThemeCheckbox.addEventListener('change', function()
{
	mainDiv.classList.toggle('theme');
	logoBlack.classList.toggle("isHidden");
	logoWhite.classList.toggle("isHidden");

})

largeTextCheckbox.addEventListener('change', function()
{
	mainDiv.classList.toggle('largeText');
	for(let i=0; i<buttons.length; i++)
		{
			buttons[i].classList.toggle('buttonText');
		}

})
