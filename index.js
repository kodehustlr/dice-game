// Player 1's dice
var randomNumber1 = Math.ceil(Math.random() * 6);
var dice1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", dice1);
console.log(randomNumber1);

// Player 2's dice
var randomNumber2 = Math.ceil(Math.random() * 6);
var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", dice2);
console.log(randomNumber2);

// Change heading for the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🍟Player 1 Wins!";
}
if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🍕";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "🥓Draw!🥓";
}
