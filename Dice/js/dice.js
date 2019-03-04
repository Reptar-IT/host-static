//returns random num from 1 to 6.
function roll(){
  var r=Math.floor(Math.random()*6)+1;
  return r;
}

function dice(){
  var p1 = roll();
  var p2 = roll();
  var a = document.querySelectorAll(".img");
  var b = document.querySelector(".dice h3");
  //if p1 is greater  player1 wins
  if(p1>p2){
    a[0].setAttribute("src", "images/die-" + p1 + ".png");
    a[1].setAttribute("src", "images/die-" + p2 + ".png");
    b.innerHTML = "Player 1 Wins!";
    //if p1 is equal to p2 it's a draw
  } else if(p1<p2) {
    a[0].setAttribute("src", "images/die-" + p1 + ".png");
    a[1].setAttribute("src", "images/die-" + p2 + ".png");
    b.innerHTML = "Player 2 Wins!";
    //p2 is greater and player2 wins
  } else {
    a[0].setAttribute("src", "images/die-" + p1 + ".png");
    a[1].setAttribute("src", "images/die-" + p2 + ".png");
    b.innerHTML = "Draw!";
  }
}
