var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  setTimeout(function(){
    exhibitCurrentSequence();
  }, 1000);
  level++;
  $("h1").html("Level "+ level);
}

function exhibitCurrentSequence(){
  for (var i=0; i<gamePattern.length; i++) {
   (function(ind) {
      setTimeout(function(){
        animatePress(gamePattern[ind]);
        playSound(gamePattern[ind]);
      }, 1500 * ind);
    })(i);
  }
}

function reset() {
  // reset the game patterns
  gamePattern = [];
  userClickedPattern = [];
  // reset the game Level
  level = 0;
}

// event on button click
$(".btn").on("click", function(){
  if(level !== 0) {  
    var userChosencolor = $(this).attr("id");
    // animate the html element that was clicked
    animatePress(userChosencolor);
    playSound(userChosencolor);
    // push the value of the clicked attribute into the array
    userClickedPattern.push(userChosencolor);
    checkMatch(userChosencolor);
  }
});

function checkMatch(chosenColor) {
  var a = (userClickedPattern.length) - 1;
  if(chosenColor !== gamePattern[a]){
    // create a new sound variable with the audio for wrong
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    // add class
    $("body").addClass("game-over");
    // display game over and restart instruction
    $("h1").html("Game Over! Press any key to Start");
    // set timeout function
    setTimeout(function(){
    // remove class
    $("body").removeClass("game-over");
    // do this action after 600 milliseconds
    }, 600);
    reset();
  } else {
    if(userClickedPattern.length === gamePattern.length){
      // reset the user patterns
      userClickedPattern = [];
      if(level !== 0){
        nextSequence();
      }
    }
  }
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  }, 400);
}

function playSound(currentColor){
  var sound = new Audio("sounds/"+currentColor+".mp3");
  sound.play();
}

// press any key to start the game"
$(document).on("keydown", function(){
  // if the game is at level zero
  if(level === 0){
    // trigger function to update gamePattern
    nextSequence();
  }
});
