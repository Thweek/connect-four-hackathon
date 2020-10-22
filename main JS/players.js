/*PLAYER:
STATE
-id 
-name (name for player 1 and player 2/computer)
-colour (red/yellow)
-slot position (start at neutral/blank)
BEHAVIOUR
-Choose slot method (1-7)
*/

class Player {
  constructor(id, name, colour) {
    this.id = id;
    this.name = name;
    this.colour = colour;
    
  }

  getMove() {
    const number = (
      prompt(`${name} Pick a slot between 1 and 7.`)
    )
      return number -1;
  }

}