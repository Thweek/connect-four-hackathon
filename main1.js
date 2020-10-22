const playerName1 = prompt("Player1 What is your name?");
const playerName2 = prompt("Player 2 What is your name?");

const players = [
  { id: 1, name: playerName1, colour: "Red" },
  { id: 2, name: playerName2, colour: "Yellow" },
];

const game = new Game(players);

game.play();
