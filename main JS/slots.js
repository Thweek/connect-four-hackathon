/*SLOT:
STATE
-Holes are empty/yellow/red
BEHAVIOUR
-Change hole to active players colour.
*/

class Slot {
    constructor(id){
        this.slotId = id;
        this.slotColour = "white";
    }
    setRed(){
        this.slotColour = "red";
    }
    setYellow(){
        this.slotColour = "yellow";
    }
    setWhite(){
        this.slotColour = "white";
    }
}