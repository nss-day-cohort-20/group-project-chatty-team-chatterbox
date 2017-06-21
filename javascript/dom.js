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

			//take text value, add it to private array of message objects
			// webpage.createContainerDiv(messageObject.message);
			// output to DOM with delete button
			// webpage.messages.createMessage(text);

		}else{
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
		msgText.classList.toggle('ishidden');
		let editArea = document.createElement('input');
		editArea.setAttribute("type", "text");
		msgWrapper.insertBefore(editArea, deleteMsgBtn);
		editArea.value = temp;
		editArea.focus();
		editArea.addEventListener('keyup', function()
		{
			if(event.keyCode === 13)
			{
				msgText.classList.toggle('ishidden');
				msgText.innerHTML = editArea.value;
				Chatty.messages.editMessage(counter, editArea.value);
				msgWrapper.removeChild(editArea);
			}
		})
	})
}


//TODO - move to main.js
// webpage.createContainerDiv("hello how are you?");
// webpage.createContainerDiv("Bonjour! Ca va bein?");
// webpage.createContainerDiv("Just testing one more msg");


window.Chatty = window.Chatty || {};
Chatty.webpage = webpage;

}
