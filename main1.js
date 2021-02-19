let playerName1 = prompt("Player 1 What is your name?", "Player One");
let playerName2 = prompt("Player 2 What is your name?", "Player Two");

let buttonOne = document.querySelector("#button1");
let buttonTwo = document.querySelector("#button2");
let buttonThree = document.querySelector("#button3");
let buttonFour = document.querySelector("#button4");
let buttonFive = document.querySelector("#button5");
let buttonSix = document.querySelector("#button6");
let buttonSeven = document.querySelector("#button7");
// let resetButton = document.querySelector("#reset")
if(playerName1 === null || " " || undefined){
  playerName1 = "Player One"
}

if(playerName2 === null || " " || undefined){
  playerName2 = "Player Two"
}

const players = [
  { id: 1, name: playerName1, colour: "Red" },
  { id: 2, name: playerName2, colour: "Yellow" },
];

const game = new Game(players);

buttonOne.addEventListener("click", () => {
  game.play(0);
  disableButtons();
});
buttonTwo.addEventListener("click", () => {
  game.play(1);
  disableButtons();
});
buttonThree.addEventListener("click", () => {
  game.play(2);
  disableButtons();
});
buttonFour.addEventListener("click", () => {
  game.play(3);
  disableButtons();
});
buttonFive.addEventListener("click", () => {
  game.play(4);
  disableButtons();
});
buttonSix.addEventListener("click", () => {
  game.play(5);
  disableButtons();
});
buttonSeven.addEventListener("click", () => {
  game.play(6);
  disableButtons();
});

function disableButtons() {
    buttonOne.disabled = true;
    buttonTwo.disabled = true;
    buttonThree.disabled = true;
    buttonFour.disabled = true;
    buttonFive.disabled = true;
    buttonSix.disabled = true;
    buttonSeven.disabled = true;
  setTimeout(function () {
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
    buttonThree.disabled = false;
    buttonFour.disabled = false;
    buttonFive.disabled = false;
    buttonSix.disabled = false;
    buttonSeven.disabled = false;
  }, 200);
}
