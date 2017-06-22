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
	if (event.key==="Enter"){
		let messageObject = {};
		messageObject.message = webpage.getText();
			clearAllBtn.disabled= false;
		console.log ("text", messageObject);
		if (text !== ""){

			Chatty.messages.createMessage(messageObject);

		} else{
			alert("Please type your message in the text box and press enter.");
		}
		console.log(Chatty.messages.getAllMessages());
		document.getElementById('messageInput').value = "";
	}

})

webpage.createContainerDiv = function (userText, counter) {
	let msgWrapper = document.createElement('div');
	msgWrapper.setAttribute('id', counter);
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
		console.log("counter", counter)
		Chatty.messages.deleteMessage(counter);
	})
	let editMsgBtn = document.createElement('button');
	editMsgBtn.setAttribute("class", 'editMsgBtn');
	editMsgBtn.innerHTML = "Edit";
	msgWrapper.appendChild(editMsgBtn);
	editMsgBtn.addEventListener('click', function()
	{
		let temp = msgText.innerHTML;
		msgText.classList.toggle('isHidden');
		let editArea = document.createElement('input');
		editArea.setAttribute("type", "text");
		msgWrapper.insertBefore(editArea, deleteMsgBtn);
		editArea.value = temp;
		editArea.addEventListener('keyup', function()
		{
			if(event.keyCode === 13)
			{
				msgText.classList.toggle('isHidden');
				msgText.innerHTML = editArea.value;
				msgWrapper.removeChild(editArea);
			}
		})
	})
}

window.Chatty = window.Chatty || {};
Chatty.webpage = webpage;
}


