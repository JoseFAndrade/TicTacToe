import { Component, Renderer2, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tictactoe } from '../Tictactoe';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  game: Tictactoe = new Tictactoe();
  grid = this.game.getGrid();
  person: number = 0;
  personToColor = ['red', 'blue'];
  private renderer = inject(Renderer2);

  /**
   * Will return the x and y coordinates of the tile that is being clicked on
   * @param i The i index
   * @param j the y index
   */
  onTileClick(event: PointerEvent, i: number, j: number) {
    console.log(i + '   ' + j);


    if(this.game.checkPlayable()){
      const tag = event.target as HTMLElement;
      this.renderer.setStyle(tag, 'background-color', this.personToColor[this.person]);

      this.game.setPiece(i, j, this.person);

      let won: number = this.game.checkWin();
      if(won !== -1)
        console.log("the game has ended and " + this.personToColor[won] + "has won the game");
      //change turn
      if (this.person === 0)
        this.person = 1;
      else
        this.person = 0;

    }
  }
}
