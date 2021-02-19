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
    currentPlayerDisplay.innerHTML = `Current player is ${this.players[this.currentPlayerIndex].name} their colour is ${this.players[this.currentPlayerIndex].colour}`
    //This displays a prompt on screen for current player and their colour at the start of the game

    //sets up winner class
    this.gameWon = new Winner();
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
      
      this.checkForWinner(row, playerMove, colour, this.connectFour.grid, this.players[this.currentPlayerIndex].name, this.gameWon)

      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.players.length) {
        this.currentPlayerIndex = 0;
      }
      //Switch to next player

      let currentPlayerDisplay = document.querySelector("#player-name")
      if(this.gameWon.winnerFound === false){
        currentPlayerDisplay.innerHTML = `Current player is ${this.players[this.currentPlayerIndex].name} there colour is ${this.players[this.currentPlayerIndex].colour}`
      } else {
        let buttonOne = document.querySelector("#button1");
        let buttonTwo = document.querySelector("#button2");
        let buttonThree = document.querySelector("#button3");
        let buttonFour = document.querySelector("#button4");
        let buttonFive = document.querySelector("#button5");
        let buttonSix = document.querySelector("#button6");
        let buttonSeven = document.querySelector("#button7");
        buttonOne.remove()
        buttonTwo.remove()
        buttonThree.remove()
        buttonFour.remove()
        buttonFive.remove()
        buttonSix.remove()
        buttonSeven.remove()
        console.log(`Winner found is ${this.gameWon.winnerFound}`)
        currentPlayerDisplay.innerHTML = `The winner is ${this.gameWon.winningPlayer}, click restart to play again.`
      }
      //This displays a prompt on screen for current player and their colour.
      //Also removes buttons and creates the win screen.

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

  checkForWinner(row, column, color, grid, player, gameWon){
    console.log(row, column, color)
    //this is the index for the row and column, +1 for actual position.
    
    function checkHorizontal(){
      let count = 1
      let winningFour = [grid[row][column].slotId]
      console.log(`Winning four reset to just ${winningFour}`)
      //for loop plus and minus either side 
      //check if it goes over or under array index length
      //have count that increases as same coloured slots found 
      //stop loop if different colour found or if edge of array is reached.
      //If count reaches four then you have a winner
      //One side at a time.

      for (let i = column+1; i<column+4; i++){
        // console.log(`Testing to the right of column ${column}`)

        if (i > 6 || grid[row][i].slotColour != color) {
          // console.log(`The count is ${count}`)
          break
          
        } else if(grid[row][i].slotColour === color){
          count++
          winningFour.push(grid[row][i].slotId)
          // console.log(`The count is ${count-1} + 1 from the right`)
        }
      }
      
      for (let i = column-1; i > column-4; i--){
        // console.log(`Testing to the left of column ${column}`)

        if(i < 0 || grid[row][i].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[row][i].slotColour === color){
          count++
          winningFour.push(grid[row][i].slotId);
          // console.log(`The count is ${count-1} + 1 from the left`)
        }
      }

      if (count === 4){
        confirm(`The winner is ${player}`);
        gameWon.setWinner(player);
        // console.log(`The winning four are ${winningFour}`);
        winningFour.forEach((slotId)=>{
          let winningSlot = document.getElementById(`${slotId}`);
          winningSlot.style.borderStyle = "solid";
          winningSlot.style.borderWidth = "medium";
          winningSlot.style.borderColor = "white";
        })
        // console.log(`Gamewon is ${gameWon.winnerFound}`)
      }

    }

    function checkVertical(){
      let count = 1
      let winningFour = [grid[row][column].slotId]
      // console.log(`Winning four reset to just ${winningFour}`)

      for(let i = row+1; i<row+4; i++){
        // console.log(`Testing below chip placed in row ${row}`)
        if(i > 5 || grid[i][column].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[i][column].slotColour === color){
          count++
          winningFour.push(grid[i][column].slotId)
          // console.log(`The count is ${count-1} + 1 from below`)
        }
      }

      if(count === 4){
        confirm(`The winner is ${player}`)
        gameWon.setWinner(player)
        winningFour.forEach((slotId)=>{
          let winningSlot = document.getElementById(`${slotId}`);
          winningSlot.style.borderStyle = "solid";
          winningSlot.style.borderWidth = "medium";
          winningSlot.style.borderColor = "white";
        })
        // console.log(`Gamewon is ${gameWon.winnerFound}`)
      }

    }

    function checkTopLeftDiagonal(){
      //row and column +i.
      //for loop just needs to go up to 3/4 depending on starting count.
      //break if not same as color. 
      //break if row+i > 5. Or row-i < 0.
      //break if column+i >6. Or column-i < 0.

      let count = 1
      let winningFour = [grid[row][column].slotId]
      // console.log(`Winning four reset to just ${winningFour}`)

      for(let i = 1; i<4; i++){
        // console.log(`Testing top left of chip placed in column ${column}, row ${row}`)
        if(row-i < 0 || column-i < 0 || grid[row-i][column-i].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[row-i][column-i].slotColour === color){
          count++
          winningFour.push(grid[row-i][column-i].slotId)
          // console.log(`The count is ${count-1} + 1 from top left`)
        }
      }

      for(let i = 1; i<4; i++){
        // console.log(`Testing bottom right of chip placed in column ${column}, row ${row}`)
        if(row+i > 5 || column+i > 6 || grid[row+i][column+i].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[row+i][column+i].slotColour === color){
          count++
          winningFour.push(grid[row+i][column+i].slotId)
          // console.log(`The count is ${count-1} + 1 from bottom right`)
        }
      }

      if(count === 4){
        confirm(`The winner is ${player}`)
        gameWon.setWinner(player)
        winningFour.forEach((slotId)=>{
          let winningSlot = document.getElementById(`${slotId}`);
          winningSlot.style.borderStyle = "solid";
          winningSlot.style.borderWidth = "medium";
          winningSlot.style.borderColor = "white";
        })
        // console.log(`Gamewon is ${gameWon.winnerFound}`)
      }
    }
    
    function checkTopRightDiagonal(){

      let count = 1
      let winningFour = [grid[row][column].slotId]
      // console.log(`Winning four reset to just ${winningFour}`)

      for(let i = 1; i<4; i++){
        // console.log(`Testing top right of chip placed in column ${column}, row ${row}`)
        if(row-i < 0 || column+i > 6 || grid[row-i][column+i].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[row-i][column+i].slotColour === color){
          count++
          winningFour.push(grid[row-i][column+i].slotId)
          // console.log(`The count is ${count-1} + 1 from top right`)
        }
      }

      for(let i = 1; i<4; i++){
        // console.log(`Testing bottom left of chip placed in column ${column}, row ${row}`)
        if(row+i > 5 || column-i < 0 || grid[row+i][column-i].slotColour != color){
          // console.log(`The count is ${count}`)
          break

        } else if (grid[row+i][column-i].slotColour === color){
          count++
          winningFour.push(grid[row+i][column-i].slotId)
          // console.log(`The count is ${count-1} + 1 from bottom left`)
        }
      }


      if(count === 4){
        confirm(`The winner is ${player}`)
        gameWon.setWinner(player)
        winningFour.forEach((slotId)=>{
          let winningSlot = document.getElementById(`${slotId}`);
          winningSlot.style.borderStyle = "solid";
          winningSlot.style.borderWidth = "medium";
          winningSlot.style.borderColor = "white";
        })
        // console.log(`Gamewon is ${gameWon.winnerFound}`)
      }
    }

    checkHorizontal()
    checkVertical()
    checkTopLeftDiagonal()
    checkTopRightDiagonal()
  }
}

//reset button made and working. Need to add css.

//create a winner class, that can change once winner found.

//Get it to highlight the winning four.

//Deploy as Lan game.
//Work on websocket version.
