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
    //set up 6 x 7 array grid.
    this.connectFour = new Grid();
    //Creates players and assigns name, colour and id.
    this.players = [
      new Player(players[0].id, players[0].name, players[0].colour),
      new Player(players[1].id, players[1].name,  players[1].colour),
    ];
    //Helps switch between players.
    this.currentPlayerIndex = 0;

    //Shows current player
    let currentPlayerDisplay = document.querySelector("#player-name")
    currentPlayerDisplay.innerHTML = `Current player is ${this.players[this.currentPlayerIndex].name} there colour is ${this.players[this.currentPlayerIndex].colour}`
    //This displays a prompt on screen for current player and their colour at the start of the game
  }
  play(playerMove) {  
      let row = this.checksIfEmpty(playerMove)  
      //Gets the current players colour to pass down to setColour
      let colour = this.players[this.currentPlayerIndex].colour;
      //Change colour of span elements

      let chosenId = this.connectFour.grid[this.checksIfEmpty(playerMove)][playerMove].slotId;
      // console.log(`Id of slot is ${chosenId}`)
      //returns log of the id of the slot that the exact slot the chip went into.

      let chosenSlot = document.getElementById(`${chosenId}`)
      chosenSlot.style.backgroundColor = colour
      //changes backgroundcolour of span css based on specific slot id

      //Main game function to add a coloured piece when a column is selected.
      this.connectFour.grid[this.checksIfEmpty(playerMove)][playerMove].setColour(colour);
      //Set colour to next players colour on array.

      
      // console.log(`Last players colour was ${chosenSlot.style.backgroundColor}`)
      
      this.checkForWinner(row, playerMove, colour, this.connectFour.grid, this.players[this.currentPlayerIndex].name)

      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
      //Switch to next player

      let currentPlayerDisplay = document.querySelector("#player-name")
      currentPlayerDisplay.innerHTML = `Current player is ${this.players[this.currentPlayerIndex].name} there colour is ${this.players[this.currentPlayerIndex].colour}`
      //This displays a prompt on screen for current player and their colour

      console.log(this.connectFour.grid)
      //returns log of matrix array with slot colour changed based on player input
    }
  //Figure out next empty slot in the array for position.
  checksIfEmpty(column) {
    for (let i = this.connectFour.grid.length - 1; i >= 0; i--) {
      //console.log(`Column index is ${column}`);
      //returns log of chosen column array index
      if (this.connectFour.grid[i][column].slotColour === "white") {
        //console.log(`Row index is ${i}`)
        //returns log of the array index of the row the chip was dropped to
        return i;
      }
    }
  }

  checkForWinner(row, column, color, grid, player){
    console.log(row, column, color)
    //this is the index for the row and column, +1 for actual position.
    function checkVertical(){

    }
    function checkHorizontal(){
      let count = 0
      //for loop plus and minus either side 
      //check if it goes over or under array index length
      //have count that increases as same coloured slots found 
      //stop loop if different colour found or if edge of array is reached.
      //If count reaches four then you have a winner
      //One side at a time.

      //progress:
      //it can do it in one direction horizontally but buggers up if you place something in last column
      //Look into why it doesnt then move onto changing the player
      for (let i = column; i<column+3; i++){
        console.log(`This is column ${column}`)
        
        if (grid[row][i].slotColour != color || i === 7) {
          return console.log(`The count is ${count}`)
          
        } else if(grid[row][i].slotColour === color){
          count++
          console.log(`The colour is ${grid[row][i].slotColour}`)
          console.log(`The count is ${count-1} + 1`)
        }
      }
      if (count === 4){
        alert(`The winner is ${player}`)
      }

    }
    function checkTopLeftDiagonal(){

    }
    
    function checkTopRightDiagonal(){

    }

    checkHorizontal()
  }
}
