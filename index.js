var randomNumber = Math.floor(Math.random() * 6) + 1;
var a = "./dice" + randomNumber + ".png";
document.querySelector(".img1").setAttribute("src", a);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var b = "./dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", b);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").textContent = "🥳 PLAYER 1 WON 🎉";
} else if (randomNumber2 > randomNumber) {
  // Fixed variable name
  document.querySelector("h1").textContent = "🥳 PLAYER 2 WON 🎉";
} else {
  // Corrected syntax
  document.querySelector("h1").textContent = "😬 DRAW 😬";
}
