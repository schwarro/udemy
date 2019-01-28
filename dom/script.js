let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let reset = document.querySelector("#reset");
let h1 = document.querySelector('h1');
let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
let p = document.querySelector('p');
let numInput = document.querySelector('input');
let options = document.querySelectorAll('button');

let p1CurrentScore = 0;
let p2CurrentScore = 0;

let gameOver = false;
let win;

numInput.addEventListener("change", function(){
  p.textContent = "Playing to: " + numInput.value;
  win = Number(numInput.value);
})

p1.addEventListener("click", function(){
  if(!gameOver){
    p1CurrentScore++;
    if(p1CurrentScore === win){
      p1Score.classList.add("winner");
      gameOver = true;
    }
    p1Score.innerHTML = p1CurrentScore;
  }
})

p2.addEventListener("click", function(){
  if(!gameOver){
    p2CurrentScore++;
    if(p2CurrentScore === win){
      p2Score.classList.add("winner");
      gameOver = true;
    }
    p2Score.innerHTML = p2CurrentScore;
  }
})

reset.addEventListener("click", function(){
  p1Score.innerHTML = 0;
  p2Score.innerHTML = 0;
  p1Score.classList.remove("winner");
  p2Score.classList.remove("winner");
  gameOver = false;
  p1CurrentScore = 0;
  p2CurrentScore = 0;
})

for(var i = 0; i < options.length; i++){
  options[i].addEventListener('mousedown', function(){
    this.style.background = "blue";
  });
  options[i].addEventListener('mouseup', function(){
    this.style.background = "#ECECEC";
  });
}
