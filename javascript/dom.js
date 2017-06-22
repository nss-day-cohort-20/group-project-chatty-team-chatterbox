{

let webpage = {}

//event listener for text box
let textbox = document.getElementById("messageInput");
let wrapperDiv = document.getElementById("chatWrapper");
let clearAllBtn = document.getElementById("clearButton");

let text = null;

webpage.getText = function (){
	text = textbox.value;
	console.log ("text",text);
	return text;
}

webpage.clearFromDOM = function(){
	while(wrapperDiv.hasChildNodes()){

			wrapperDiv.removeChild(wrapperDiv.lastChild);
	}
}

webpage.disabled = function(){

	if (wrapperDiv.hasChildNodes() === false){clearAllBtn.setAttribute("disabled", true);
	}
}
clearAllBtn.addEventListener("click", function(){

	webpage.clearFromDOM();
	webpage.disabled();

})

textbox.addEventListener("keyup", function(event){
	if (event.key==="Enter")
		{
		let messageObject = {};
		messageObject.message = webpage.getText();
			clearAllBtn.disabled= false;
		if (text !== "")
		{
			let activeUser = document.querySelector('input[name="users"]:checked');
			if(activeUser === undefined || activeUser === null) {
				alert("select a user");
			}
			else {
				Chatty.messages.createMessage(messageObject, activeUser.value);
			}
		}
		else
		{
			alert('Sorry! You cannot send a blank chat');
		}
		document.getElementById('messageInput').value = "";
	}

})

webpage.createContainerDiv = function (userText, counter, time, activeUser) {
	//check if the chat message list on the page list is 20, if so remove first element before adding another
	if (wrapperDiv.childElementCount >= 20) {
		while (wrapperDiv.childElementCount >= 20) {
			wrapperDiv.removeChild(wrapperDiv.firstChild);
		}
	}
	//create div for messages, append to chatWrapper/wrapperDiv
	let msgWrapper = document.createElement('div');
	msgWrapper.setAttribute('id', counter);
	wrapperDiv.appendChild(msgWrapper);
	//create p element from text input, append to msgWrapper
	let msgText = document.createElement('p');
	let boldUser = document.createElement('span');
	boldUser.setAttribute('class','boldUser');
	boldUser.innerHTML = activeUser + ':&nbsp; ';
	msgWrapper.appendChild(boldUser);
	msgWrapper.appendChild(msgText);
	msgText.innerHTML = ` ${userText}`;
	let timeStamp = document.createElement('date');
	timeStamp.innerHTML = time;
	msgWrapper.appendChild(timeStamp);
	// create button wrapper for flexbox layout within messages written to DOM
	let buttonWrapper = document.createElement('div');
	buttonWrapper.setAttribute('class', 'buttonWrapper');
	msgWrapper.appendChild(buttonWrapper);
	//create button element "Delete", append to buttonWrapper
	let deleteMsgBtn = document.createElement('button');
	deleteMsgBtn.setAttribute("class","deleteMsgBtn");
	deleteMsgBtn.innerHTML = "Delete";
	buttonWrapper.appendChild(deleteMsgBtn);
	//attach listener to delete button
	deleteMsgBtn.addEventListener('click', function()
	{
		wrapperDiv.removeChild(msgWrapper);
		console.log("counter", counter)
		Chatty.messages.deleteMessage(counter);
	})
	//create "Edit" button, append to buttonWrapper
	let editMsgBtn = document.createElement('button');
	editMsgBtn.setAttribute("class", 'editMsgBtn');
	editMsgBtn.innerHTML = "Edit";
	buttonWrapper.appendChild(editMsgBtn);
	//add event listener to edit button
	editMsgBtn.addEventListener('click', function()
	{
		//begin editing.
		editMsgBtn.disabled = true;
		let temp = msgText.innerHTML;
		msgText.classList.toggle('isHidden');
		let editArea = document.createElement('input');
		editArea.setAttribute("type", "text");
		editArea.setAttribute("class", "editArea");
		msgWrapper.insertBefore(editArea, buttonWrapper);
		editArea.value = temp;
		editArea.focus();
		editArea.addEventListener('keyup', function()
		{
			if(event.keyCode === 13)
			{
				//save the edited text back to array and DOM.
				editMsgBtn.disabled = false;
				msgText.classList.toggle('isHidden');
				msgText.innerHTML = editArea.value;
				Chatty.messages.editMessage(counter, editArea.value);
				msgWrapper.removeChild(editArea);
			}
		})
	})
}

window.Chatty = window.Chatty || {};
Chatty.webpage = webpage;
}
