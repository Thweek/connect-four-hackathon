/*SLOT:
STATE
-Holes are empty/yellow/red
BEHAVIOUR
-Change hole to active players colour.
*/

class Slot {
  constructor(id) {
    this.slotId = id;
    this.slotColour = "white";
  }
  setColour(colour) {
    this.slotColour = colour;
  }
  setWhite() {
    this.slotColour = "white";
  }
}
