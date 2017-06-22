

let blue=document.getElementById("blue");
let green=document.getElementById("green");
let purple=document.getElementById("purple");
let black=document.getElementById("black");

let white=document.getElementById("white");
let yellow=document.getElementById("yellow");
let lime=document.getElementById("lime");
let pink =document.getElementById("pink");

//click handler

// blue.addEventListener("click", function(event){
// 	console.log ("event",event);
// 	console.log ("blue", blue.value);
// })

function handleSaveClick() {
		console.log(event);
		let blueClick= blue.value ;
		console.log ("blueClick", blueClick);
		return blueClick;
	}


document.getElementById("saveBtn").addEventListener("click", handleSaveClick)

// {

// 	let blue=getValue();

//     if (blue.checked===true){
//      mainDiv.classList.toggle("blue");
//         console.log("You got it!")
//     }
// }