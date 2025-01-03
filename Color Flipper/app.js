// items
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorName = document.querySelector(".color");

// adding functionality
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  colorName.textContent = colors[randomNumber];
});

// function to get random number between 0 and 3
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
