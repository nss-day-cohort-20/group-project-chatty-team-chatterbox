var wrapperDiv = document.getElementById('chatWrapper');

function fetchUserInput()
{
	let userText = document.getElementById('messageInput').value;
	return userText;
}

function createContainerDiv(userText)
{
	let msgWrapper = document.createElement('div');
	wrapperDiv.appendChild(msgWrapper);
	let msgText = document.createElement('p');
	msgWrapper.appendChild(msgText);
	msgText.innerHTML = userText;
	let deleteMsgBtn = document.createElement('button');
	deleteMsgBtn.setAttribute("class","deleteMsgBtn");
	deleteMsgBtn.innerHTML = "Delete";
	msgWrapper.appendChild(deleteMsgBtn);
	deleteMsgBtn.addEventListener('click', function()
	{
		wrapperDiv.removeChild(msgWrapper);
	})
}

createContainerDiv("hello how are you?");
createContainerDiv("Bonjour! Ca va bein?");
createContainerDiv("Just testing one more msg");

