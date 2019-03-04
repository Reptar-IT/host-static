// listen for clicks on all elements with the .drum class
var drumButton = document.querySelectorAll(".drum");
for(var i=0; i<drumButton.length; i++){
  drumButton[i].addEventListener("click", clickedButton);
}
function clickedButton(){
  sound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}
// listen for keys pressed. animates and plays sound if key is associated with one
document.addEventListener("keydown", function(e){
  sound(e.key);
  buttonAnimation(e.key);
});


function sound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log(buttonInnerHTML); console.log("The letter pressed was " + keyPressed);
  }
}

// animates by adding and removing a style class
function buttonAnimation(buttonKey) {
  var activebutton = document.querySelector("." + buttonKey);
  // add style class to class list
  activebutton.classList.add("pressed");
  // trigger function after number of milliseconds
  setTimeout(function(){
  // remove style class from class list
    activebutton.classList.remove("pressed");
  }, 100);
}
