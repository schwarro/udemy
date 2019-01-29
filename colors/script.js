let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard ");

for(var i = 0; i < modeButtons.length; i++){
  modeButtons[i].addEventListener("click", function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    messageDisplay.textContent ="";
    if(this.textContent === "Easy"){
      numberOfSquares = 3;
    } else {
      numberOfSquares = 6;
    }
    resetColors();
    //figure out how many squares to show
    //pick new Colors
    //pick a new picked color
    //update page to reflect changes
  });
}

function resetColors() {
  //reset backgroundColor for h1
  h1.style.backgroundColor = "#00bfff";
  //generate all new Colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new random colors
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    } else {
      squares[i].style.display = "none";
    }
  }
  //reset the reset button
  this.textContent = "New Colors"
  messageDisplay.textContent ="";
}

// easy.addEventListener("click", function(){
//   easy.classList.add("selected");
//   hard.classList.remove("selected");
//   numberOfSquares = 3;
//   colors=generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })
//
// hard.addEventListener("click", function(){
//   easy.classList.remove("selected");
//   hard.classList.add("selected");
//   numberOfSquares = 6;
//   colors=generateRandomColors(numberOfSquares);
//   pickedColor = pickColor();
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];
//     squares[i].style.display = "block";
//   }
// })

//Reset button
reset.addEventListener("click", function(){
  //reset backgroundColor for h1
  h1.style.backgroundColor = "#00bfff";
  //generate all new Colors
  colors = generateRandomColors(numberOfSquares);
  //pick a new random colors
  pickedColor = pickColor();
  //change color display to match pickedColor
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  //reset the reset button
  reset.textContent = "New Colors"
  messageDisplay.textContent ="";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //Add initial color to squares
  squares[i].style.backgroundColor  = colors[i];
  //Add click listeners to squares
  squares[i].addEventListener("click", function(){
  //Grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
  //Compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!"
      reset.textContent = "Play Again?"
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again!"
    }
  });
}

function changeColors(color){
  //Loop through all squares
  for(var i = 0; i < squares.length; i++){
    //change each color to give color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make an array
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
