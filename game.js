//  Simon Game Working //

// Testing if js is synced and working//

// alert("Working") --> True

// New function called nextSequence() to generate random number

//  create a new empty array called gamePattern.
let buttonColours = ["red","blue","green","yellow"];

let gamePattern = [];

// create a new empty array called userClickedPattern.
let userClickedPattern = [];
let level = 0;
let started = false;

$(document).keypress(function(event) {
  if (event.charCode == 97 && !started)
  {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }});


function startOver(){
  level = 0;
  gamePattern = []
  started = false;
}

  $(".btn").on("click", function(){
    // alert("button was clicked");
    let userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor)
    animatePress(userChosenColor)
    let audioz = new Audio('sounds\\' + userChosenColor+".mp3");
    audioz.play();
    checkAnswer(userClickedPattern.length-1);

  });
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
    setTimeout(function(){
    $("#"+currentColour).removeClass("pressed") }, 100);
}

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]== gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length == gamePattern.length)
        {
          setTimeout(function () {
            nextSequence();
          }, 500);
        }
    }
    else{
      console.log("wrong");
      let audiozx = new Audio("sounds\\wrong.mp3");
      audiozx.play();
      $("body").addClass("game-over")
      setTimeout(function(){
      $("body").removeClass("game-over") }, 100);
      $("H1").text("Game over.Press any key to restart!")
      startOver()
}
  }




function nextSequence(){
  userClickedPattern = [];
  level++;

  $("H1").text("Level "+level)


  let randomNumber = Math.floor(Math.random()*4)


// New array called buttonColours


// Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.

let randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

let audio = new Audio('sounds\\' + randomChosenColour +".mp3");
audio.play();
}
