{

let webpage = {}





let deleteMsgBtnHandler = function(msgWrapper, counter, messageListWrapperElement, deleteMessageCallback)
	{
		messageListWrapperElement.removeChild(msgWrapper);
		// console.log("counter", counter)
		deleteMessageCallback(counter);
	}

let editAreaHandler = function(editMsgBtn, msgText, editArea, counter, msgWrapper, editMessageCallback)
		{
			if(event.keyCode === 13)
			{
				//save the edited text back to array and DOM.
				editMsgBtn.disabled = false;
				msgText.classList.toggle('isHidden');
				msgText.innerHTML = editArea.value;
				editMessageCallback(counter, editArea.value);
				msgWrapper.removeChild(editArea);
			}
		}

let editMsgBtnHandler = function(editMsgBtn, msgText, msgWrapper, buttonWrapper, counter, editMessageCallback)
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
		editArea.addEventListener('keyup', function() {
			editAreaHandler(editMsgBtn, msgText, editArea, counter, msgWrapper, editMessageCallback);
		})
	}



webpage.getText = function (inputBoxElement){
	// let text = null;
	let text = inputBoxElement.value;
	console.log ("text",text);
	return text;
}

webpage.clearFromDOM = function(messageListWrapperElement){
	while(messageListWrapperElement.hasChildNodes()){

			messageListWrapperElement.removeChild(messageListWrapperElement.lastChild);
	}
}

webpage.disabled = function(clearButtonElement, messageListWrapperElement) {
	if (messageListWrapperElement.hasChildNodes() === false) {
		clearButtonElement.setAttribute("disabled", true);
	}
}





webpage.createContainerDiv = function (userText, counter, time, activeUser, messageListWrapperElement, deleteMessageCallback, editMessageCallback) {
	//check if the chat message list on the page list is 20, if so remove first element before adding another
	if (messageListWrapperElement.childElementCount >= 20) {
		while (messageListWrapperElement.childElementCount >= 20) {
			messageListWrapperElement.removeChild(messageListWrapperElement.firstChild);
		}
	}
	//create div for messages, append to chatWrapper/wrapperDiv
	let msgWrapper = document.createElement('div');
	msgWrapper.setAttribute('id', counter);
	messageListWrapperElement.appendChild(msgWrapper);
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
	deleteMsgBtn.addEventListener('click', function() {
		deleteMsgBtnHandler(msgWrapper, counter, messageListWrapperElement, deleteMessageCallback);
	})
	//create "Edit" button, append to buttonWrapper
	let editMsgBtn = document.createElement('button');
	editMsgBtn.setAttribute("class", 'editMsgBtn');
	editMsgBtn.innerHTML = "Edit";
	buttonWrapper.appendChild(editMsgBtn);
	//add event listener to edit button
	editMsgBtn.addEventListener('click', function() {
		editMsgBtnHandler(editMsgBtn, msgText, msgWrapper, buttonWrapper, counter, editMessageCallback);
	});
}

window.Chatty = window.Chatty || {};
Chatty.webpage = webpage;
}
