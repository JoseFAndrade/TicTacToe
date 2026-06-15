import { Tictactoe } from './app/Tictactoe';

class Handler{
  private turn: number;
  private playing: boolean = true;
  private game: Tictactoe;

  constructor() {
    this.turn = 0;
    this.game = new Tictactoe();
  }

  play(){

    while(this.game.checkPlayable()){
      //we need to handle now making the turn
      //turn will always be given over to 0

      //this.game.setPiece()


    }

    let winner = this.game.checkPlayable();

    return winner;
  }
}
