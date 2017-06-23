{
	let main = {};
	let messageFilesArray = ['message-1.json','message-2.json','message-3.json','message-4.json','message-5.json'];

	//event listener for text box
	let textbox = document.getElementById("messageInput");
	// DOM referenc of the clear button
	let clearAllBtn = document.getElementById("clearButton");
	// DOM reference of message list container
	let wrapperDiv = document.getElementById("chatWrapper");

	textbox.addEventListener("keyup", function(event) {
		if (event.key==="Enter") {
			let messageObject = {};
			messageObject.message = Chatty.webpage.getText(textbox);
			clearAllBtn.disabled= false;
			if (messageObject.message !== "") {
				let activeUser = document.querySelector('input[name="users"]:checked');
				if (activeUser === undefined || activeUser === null) {
					alert("select a user");
				} else {
					Chatty.messages.createMessage(messageObject, activeUser.value, wrapperDiv, Chatty.webpage.createContainerDiv);
				}
			} else {
				alert('Sorry! You cannot send a blank chat');
			}
			document.getElementById('messageInput').value = "";
		}
	});

	clearAllBtn.addEventListener("click", function(){

		Chatty.webpage.clearFromDOM(wrapperDiv);
		Chatty.webpage.disabled(clearAllBtn, wrapperDiv);

	});

	window.addEventListener("load", function() {
		Chatty.messages.loadStarterJSON(messageFilesArray, Chatty.messages.createMessage, wrapperDiv, Chatty.webpage.createContainerDiv);
	});

	window.Chatty = window.Chatty || {};
	Chatty.main = main;
}
// console.log("date",);