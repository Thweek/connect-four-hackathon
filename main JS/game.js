/*GAME:
STATE
-grid = empty
-playersArray
-activePlayersIndex
BEHAVIOUR
-play game
Set player colours, send prompt to first player. Start button/alert.
-Check Winner
See if four of the same colour are in grid in a vertical/horizontal/diagonal alignment.
Possibly need to do this for every section of grid to check for results
-Go to next player
If player hasn't won transfer to second player/other colour and start their turn.
GAME LOOP
-Player chooses slot position.
-Grid takes in slot position from player and chooses slot array based on this.
-Chosen slot array changes first empty hole in array to active players colour.
-Check for winner ^^
-Move to next player.*/

class Game {
  constructor(players) {
    this.grid = new Grid();
    
  }
}