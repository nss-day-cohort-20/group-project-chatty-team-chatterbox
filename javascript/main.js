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

			//take text value, add it to private array of message objects, output to DOM with delete button

		}else{alert("Please type your message in the text box and press enter.");}
	}

})