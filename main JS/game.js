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
    this.players = [
      new Player(players[0].name, players[0].id, players[0].colour),
      new Player(players[1].name, players[1].id, players[1].colour),
    ];
    this.currentPlayerIndex = 0;
  }
  play(){
    while(true){
        let playerMove = this.players[this.currentPlayerIndex].getMove();
        let colour = this.players[this.currentPlayerIndex].colour;
        this.grid.grid[checksIfEmpty][playerMove].setColour(colour);
        //Figure out next empty slot in the array for position.
        function checksIfEmpty (playerMove){
            for(let i = this.grid.grid.length -1; i >= 0; i--){
                if(this.grid.grid[i][playerMove].slotColour === "white"){
                    return i;
                }
            }
        }
        console.log(this.grid.grid);
        this.currentPlayerIndex++
        if(this.currentPlayerIndex>this.players.length){
            this.currentPlayerIndex = 0;
        }
    }
  }
}
