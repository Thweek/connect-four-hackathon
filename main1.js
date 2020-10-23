const playerName1 = prompt("Player1 What is your name?");
const playerName2 = prompt("Player 2 What is your name?");

let buttonOne = document.querySelector("#button1");
let buttonTwo = document.querySelector("#button2");
let buttonThree = document.querySelector("#button3");
let buttonFour = document.querySelector("#button4");
let buttonFive = document.querySelector("#button5");
let buttonSix = document.querySelector("#button6");
let buttonSeven = document.querySelector("#button7");

const players = [
  { id: 1, name: playerName1, colour: "Red" },
  { id: 2, name: playerName2, colour: "Yellow" },
];

const game = new Game(players);

buttonOne.addEventListener("click", ()=> {game.play(0);});
buttonTwo.addEventListener("click", ()=> {game.play(1)});
buttonThree.addEventListener("click", ()=> {game.play(2)});
buttonFour.addEventListener("click", ()=> {game.play(3)});
buttonFive.addEventListener("click", ()=> {game.play(4)});
buttonSix.addEventListener("click", ()=> {game.play(5)});
buttonSeven.addEventListener("click", ()=> {game.play(6)});


//Creat event lsiteners and pass in to play();

//parseInt(prompt(`${this.name} Pick a slot between 1 and 7.`));
// function slotSelect1() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect2() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect3() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect4() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect5() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect6() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }

// function slotSelect7() {
//   let number = parseInt(buttonOne.innerText.slice(-1));
//   console.log(number);
//   return number - 1;
// }
