var wrapperDiv = document.getElementById('chatWrapper');

//event listener for text box
let textbox = document.getElementById("messageInput");

let text = null;

function getText(){
	text = textbox.value;
	console.log ("text",text);
	return text;
}

textbox.addEventListener("keyup", function(event){
	if (event.key==="Enter"){
		text = getText();
		console.log ("text",text);
		if (text !== ""){
			//messages.createMessage(text);
			//take text value, add it to private array of message objects
			createContainerDiv(text);
			// output to DOM with delete button

		}else{alert("Please type your message in the text box and press enter.");}
	}

})

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