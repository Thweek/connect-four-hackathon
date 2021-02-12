/*
STATE 
Winner found boolean
Name of Winner
BEHAVIOUR
set winner found to true and then set name of winner
*/

class Winner {
    constructor(){
        this.winnerFound = false;
        this.winningPlayer = "noWinnerFound"
    }
    setWinner(name){
        this.winnerFound = true;
        this.winningPlayer = name;
    }
}