import {
  Component,
  Renderer2,
  inject,
  afterNextRender,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Tictactoe } from '../Tictactoe';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  game: Tictactoe = new Tictactoe();
  grid = signal(this.game.getGrid());
  person: number = 0;
  personToColor = ['red', 'blue'];
  private renderer = inject(Renderer2);
  depth: number | undefined = 2;

  constructor() {}

  ngOnInit() {
    var grid2 = [
      [0, 1, 0],
      [0, 1, 0],
      [-1, -1, 1],
    ];

    var grid3 = [
      [1, 0, 0],
      [-1, -1, -1],
      [-1, 1, -1],
    ];
    console.log('test');
    console.log(JSON.stringify(grid2));
    //console.log(Tictactoe.minimax(1, grid3));
    console.log('what ');
  }

  /**
   * Will return the x and y coordinates of the tile that is being clicked on
   * @param i The i index
   * @param j the y index
   */
  onTileClick(event: PointerEvent, i: number, j: number) {
    console.log(i + '   ' + j);

    if (this.game.checkPlayable()) {
      const tag = event.target as HTMLElement;
      //this.renderer.setStyle(tag, 'background-color', this.personToColor[this.person]);

      this.game.setPiece(i, j, this.person);

      let won: number = this.game.checkWin();
      if (won !== -1)
        console.log('the game has ended and ' + this.personToColor[won] + 'has won the game');
      //change turn
      //if (this.person === 0) this.person = 1;
      //else this.person = 0;
      //have ai take over _> ai is always 1
      var move = Tictactoe.minimax(1, this.game.getGrid(), this.depth);
      console.log('ai move was: ' + move);
      var x = move[0];
      var y = move[1];

      this.game.setPiece(x, y, 1);
      var aiTag = document.getElementsByClassName(`piece-${x}-${y}`)[0];
      console.log(aiTag);
      this.renderer.setStyle(aiTag, 'background-color', 'blue');
    }
  }

  setCap(cap: number | undefined) {
    this.depth = cap;
  }

  resetBoard(){
    this.game = new Tictactoe();
    this.grid.set(this.game.getGrid());
    console.log("did it not reset");
    console.log(this.grid());
  }
}
