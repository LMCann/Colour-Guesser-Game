var numSquares = 6;
var colours = generateRandom(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var h1 = document.querySelector("h1");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	numSquares = 3;
	colours = generateRandom(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
		if(colours[i]){
			squares[i].style.backgroundColor = colours[i];
		} 
		else {
			squares[i].style.display = "none";
		}
	}
})
hardBtn.addEventListener("click", function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	h1.style.backgroundColor = "steelblue";
	numSquares = 6;
	colours = generateRandom(numSquares);
	pickedColour = pickColour();
	colourDisplay.textContent = pickedColour;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colours[i];
			squares[i].style.display = "block";
	}
})

var colourDisplay = document.querySelector("#colourDisplay");
colourDisplay.textContent = pickedColour;

var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
		//generate random colours
		colours = generateRandom(numSquares);
		//pick a new random colour from an array
		pickedColour = pickColour();
		colourDisplay.textContent = pickedColour;
		//change colours of squares
		for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colours[i];
		}
		//change colour of header background
		h1.style.backgroundColor = "steelblue";
		resetButton.textContent = "New Colours";
		message.textContent = "";
	});

for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colours[i];

	squares[i].addEventListener("click", function(){
		var clickedColour = this.style.backgroundColor;
		var message = document.querySelector("#message");
		if(clickedColour === pickedColour){
			message.textContent = "Correct!";
			changeColours(clickedColour);
			resetButton.textContent = "Play again?";
		}
		else{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}

function changeColours(colour){
	h1.style.backgroundColor = colour;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour;
	}
}

function pickColour(){
	var randomColour = Math.floor(Math.random() * colours.length);
	return colours[randomColour];
}

function generateRandom(num){
	//make an array
	arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//push random colour into the array
		arr.push(randomise());
	}
	//return array
	return arr;
}
function randomise(){
	//get random red
	var r = Math.floor(Math.random() * 256);
	//get random green
	var g = Math.floor(Math.random() * 256);
	//get random blue
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}