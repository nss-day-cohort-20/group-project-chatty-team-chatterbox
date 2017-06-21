

let darkThemeCheckbox = document.getElementById('darkTheme');
let largeTextCheckbox = document.getElementById('largeText');
let mainDiv = document.getElementById('pageWrapper');
let buttons = document.getElementsByTagName('button');


darkThemeCheckbox.addEventListener('change', function()
{
	mainDiv.classList.toggle('theme');
})

largeTextCheckbox.addEventListener('change', function()
{
	mainDiv.classList.toggle('largeText');
	for(let i=0; i<buttons.length; i++)
		{
			buttons[i].classList.toggle('buttonText');
		}
	
})
