{
	let messagesArray = [];
	let messagesCounter = 1;

	let messages = {}; // or Object.create(null);

	messages.loadStarterJSON = function() {

		let messageRequest = new XMLHttpRequest();

		function messageXHRErrorHandler() {
			console.log("An error occured while transfering data");
		}

		function messageXHRLoadHandler() {
			// console.log("event.target", event.target);
			let data = JSON.parse(event.target.responseText);
			// console.log("data", data);

			// put data in private message array here
			data.messages.forEach(function(message) {
				Chatty.messages.createMessage(message);
			});
		}

		messageRequest.addEventListener("load", messageXHRLoadHandler);
		messageRequest.addEventListener("error", messageXHRErrorHandler);

		messageRequest.open("GET", "data/messages.json");

		messageRequest.send();

	}

	messages.createMessage = function(message) {
		message.id = messagesCounter;
		messagesArray.push(message);
		messagesCounter++;
		Chatty.webpage.createContainerDiv(message.message, message.id); //puts the default 5 messages on DOM on load.
	}

	messages.getAllMessages = function() {
		return messagesArray;
	}

	//deletes message based on the index passed in
	// TODO: need a better way to tie the delete event hander on the button to the message in the private Array
	messages.deleteMessage = function(divId) {
		for(i=0; i<messagesArray.length;i++)
			{
				if(divId === messagesArray[i].id)
					{
						var messageIndex = messagesArray.indexOf(messagesArray[i]);
						// console.log("I was here", messagesArray[i].message);
						// console.log("I was here", messageIndex);
					}
			}
			messagesArray.splice(messageIndex, 1);
	}

	window.Chatty = window.Chatty || {};
	Chatty.messages = messages;
}