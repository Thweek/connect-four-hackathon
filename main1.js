  const playerName1 = prompt("Player1 What is your name?");
  const playerName2 = prompt("Player 2 What is your name?");

  const players = [
    {name: playerName1, id: 1, colour: "Red"},
    {name: playerName2, id: 2, colour: "Yellow"}
  ];

  const game = new Game(
    players
  );

  game.play();


