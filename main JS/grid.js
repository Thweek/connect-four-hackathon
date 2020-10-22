/* GRID:
STATE
-Matrix of 42 slots
-active player
BEHAVIOUR
-get Player
-Choose slot position within matrix.
*/

//Matrix array, with 42 slot positions.
//Each position will include a slot object.
//Active player.
//Main array. 6 arrays inside which are rows. Each row array has 7 items in it.

class Grid {
    constructor(){
        this.activePlayer = true;
        this.grid = []

        
    }
    playerOne(){
        this.activePlayer = true;
    }
    playerTwo(){
        this.activePlayer = false;
    }
}

