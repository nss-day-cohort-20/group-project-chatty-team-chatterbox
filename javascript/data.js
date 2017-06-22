{
	let messagesArray = [];
	let messagesCounter = 1;
	let userArray = [];
	let messages = {}; // or Object.create(null);

	messages.loadStarterJSON = function() {

		let messageFilesArray = ['message-1.json','message-2.json','message-3.json','message-4.json','message-5.json'];

		for (var i = 0; i < messageFilesArray.length ; i++) {
			let messageRequest = new XMLHttpRequest();
			function messageXHRErrorHandler() {
				console.log("An error occured while transfering data");
			}

			function messageXHRLoadHandler() {
				let data = JSON.parse(event.target.responseText);
				console.log("data", data);
				// put data in private message array here
				Chatty.messages.createMessage(data, data.name);
				// OLD forEach loop to load data froms single file
				// data.messages.forEach(function(message) {
				// 	Chatty.messages.createMessage(message);
				// });
			}
			messageRequest.addEventListener("load", messageXHRLoadHandler);
			messageRequest.addEventListener("error", messageXHRErrorHandler);
			messageRequest.open("GET", `data/${messageFilesArray[i]}`);
			messageRequest.send();
		}
	}

	messages.createMessage = function(message, activeUser) 
	{
		message.id = messagesCounter;
		// let temp = Date.prototype.getDate();
		message.timeStamp = new Date().toUTCString()
		messagesArray.push(message);
		messagesCounter++;
		Chatty.webpage.createContainerDiv(message.message, message.id, message.timeStamp, activeUser); //puts the default 5 messages on DOM on load.
	}

	// messages.convertToHoursAndMin(milliseconds)
	// {
	// 	let seconds = milliseconds/1000
	// }
	messages.getAllMessages = function() 
	{
		return messagesArray;
	}

	//deletes message based on the index passed in
	// TODO: need a better way to tie the delete event hander on the button to the message in the private Array
	messages.deleteMessage = function(divId) 
	{
		for(i=0; i<messagesArray.length;i++)
			{
				if(divId === messagesArray[i].id)
					{
						var messageIndex = messagesArray.indexOf(messagesArray[i]);
					}
			}
			messagesArray.splice(messageIndex, 1);
	}

	messages.editMessage = function(divId, editedText) 
	{
		for(i=0; i<messagesArray.length;i++)
			{
				if(divId === messagesArray[i].id)
					{
						var messageIndex = messagesArray.indexOf(messagesArray[i]);
					}
			}
			messagesArray[messageIndex].message = editedText;
	}

	// messages.populateRadioButtons()
	// {

	// }
	window.Chatty = window.Chatty || {};
	Chatty.messages = messages;
}