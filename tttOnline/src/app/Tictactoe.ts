export class Tictactoe {
  private grid: number[][];
  private turn: number; //the number will correspond to the chip as well |an outer function will dictate this

  constructor() {
    this.grid = [
      [-1, -1, -1],
      [-1, -1, -1],
      [-1, -1, -1],
    ];
    /*
    for(let i = 0; i < 2; i++){
      for(let y = 0; y < 2; y ++){
        this.grid[i][y] = -1;
      }
    }*/
    this.turn = 0;
  }

  setPiece(x: number, y: number, turn: number) {
    this.grid[x][y] = turn;
  }

  getGrid() {
    return this.grid;
  }

  //this function will return whether there is still playable options on the board
  checkPlayable(): boolean {
    if (this.checkWin() !== -1) return false;
    for (let i = 0; i <= 2; i++) {
      for (let y = 0; y <= 2; y++) {
        if (this.grid[i][y] === -1) return true;
      }
    }

    return false;
  }

  static checkPlayable(grid: number[][]): boolean {
    for (let i = 0; i <= 2; i++) {
      for (let y = 0; y <= 2; y++) {
        if (grid[i][y] === -1) return true;
      }
    }

    return false;
  }

  //returns the player who won
  checkWin(): number {
    //win condition is 3 in in a row | this can be up/down/diagonal

    console.log('check within a column');
    console.log(this.grid);

    //check within a row
    for (let i = 0; i <= 2; i++) {
      let continues: boolean = true;
      let prev = this.grid[i][0];
      for (let y = 0; y <= 2; y++) {
        if (prev === this.grid[i][y]) {
          prev = this.grid[i][y];
          console.log(prev);
        } else {
          continues = false;
          break;
        }
      }
      if (continues) return prev; //returns the number of the winner in this case
    }
    //check within a column
    for (let i = 0; i <= 2; i++) {
      console.log('x');
      let continues: boolean = true;
      let prev = -2;
      for (let y = 0; y <= 2; y++) {
        if (prev === -2 || this.grid[y][i] === prev) {
          prev = this.grid[y][i];
        } else {
          continues = false;
          break;
        }
      }
      if (continues) {
        return prev;
      }
    }

    //check diagonal -> just going to hard code it for now because its a 3 by 3
    if (this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2])
      return this.grid[0][0];

    if (this.grid[2][0] === this.grid[1][1] && this.grid[1][1] === this.grid[0][2])
      return this.grid[2][0];

    //this means that there will be no winner left
    return -1;
  }

  static checkWin1(grid: number[][]): number {

    for (let i = 0; i <= 2; i++) {
      let continues: boolean = true;
      let prev = grid[i][0];

      if (prev === -1) continue;

      for (let y = 0; y <= 2; y++) {
        if (prev === grid[i][y]) {
          prev = grid[i][y];
        } else {
          continues = false;
          break;
        }
      }
      if (continues) return prev;
    }

    for (let i = 0; i <= 2; i++) {
      let continues: boolean = true;
      let prev = grid[0][i];

      if (prev === -1) continue;

      for (let y = 0; y <= 2; y++) {
        if (grid[y][i] === prev) {
          prev = grid[y][i];
        } else {
          continues = false;
          break;
        }
      }
      if (continues) {
        return prev;
      }
    }

    if (grid[0][0] !== -1 && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2])
      return grid[0][0];

    if (grid[2][0] !== -1 && grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2])
      return grid[2][0];

    return -1;
  }

  static minimax(player: number, grid: number[][], depthCap? : number) {
    const instanceId = Math.random().toString(36).substring(7);

    var score = Number.MIN_SAFE_INTEGER;
    var move: number[] = [];

    Tictactoe.possibleMoves(grid).forEach((moves, index) => {
      grid[moves[0]][moves[1]] = player;
      var s = this.recursionDepth(player, grid, false, 1, depthCap);
      grid[moves[0]][moves[1]] = -1;

      if (s > score) {
        score = s;
        move = moves;
      }

    });
    return move;
  }

  //TODO fix the issue where I have two different functions where what happens is that the recursion ends up running the
  //for loop inside of the minimax function and so what happens in the current scenario is that we have two options
  //the recursion should only take into consideration each individual route but it still ends up taking both routes into consideration
  //and it is because I have the possible moves functions open up at the same time and they are both running in both functions
  //need to end up fixing this at some point

  //player will keep track of whoever the current algo is running for
  //grid is the grid of the game
  //current turn is whoevers turn it currently is -> important in order to keep track of who is moving
  static recursion(player: number, grid: number[][], maximizing: boolean): number {
    //base cases are first
    var result: number = Tictactoe.checkWin1(grid);

    if (result != -1) {
      if (player === result) {
        return 1;
      } else return -1;
    } else {
      //means that result is -1 -> there can still be plays to be made but no winner
      if (!Tictactoe.checkPlayable(grid))
        //if there is no playable options and no winner return 0
        return 0;
    }

    if (maximizing) {
      var max = Number.MIN_VALUE;

      Tictactoe.possibleMoves(grid).forEach((moves) => {
        //need to make the current move and add it to the grid and then calculate
        grid[moves[0]][moves[1]] = player;
        var value = this.recursion(player, grid, false);
        max = Math.max(value, max);
        grid[moves[0]][moves[1]] = -1;
      });

      return max;
    } else {
      var min = Number.MAX_VALUE;

      Tictactoe.possibleMoves(grid).forEach((moves) => {
        //i think i need to flip the player here?
        var flip = player === 1 ? 0 : 1;

        grid[moves[0]][moves[1]] = flip;
        var value = this.recursion(player, grid, true);
        min = Math.min(value, min);
        grid[moves[0]][moves[1]] = -1;
      });

      return min;
    }
  }

  static possibleMoves(grid: number[][]) {
    var res = [];
    for (var i = 0; i < grid.length; i++) {
      for (var y = 0; y < grid[i].length; y++) {
        if (grid[i][y] === -1) res.push([i, y]);
      }
    }

    return res;
  }

  static recursionDepth(player: number, grid: number[][], maximizing: boolean, depth: number, depthCap? : number): number {
    //base cases are first
    console.log("depth cap is: " + depthCap);
    var result: number = Tictactoe.checkWin1(grid);
    //if it hit the cap we just return it now
    if(depthCap !== undefined && depth >= depthCap)
      return 0;

    if (result != -1) {
      if (player === result) {
        return 10 - depth;
      } else return -10 + depth ;
    } else {
      //means that result is -1 -> there can still be plays to be made but no winner
      if (!Tictactoe.checkPlayable(grid))
        //if there is no playable options and no winner return 0
        return 0;
    }
    const humanPlayer = player === 1 ? 0 : 1;

    if (maximizing) {
      var max = Number.MIN_SAFE_INTEGER;

      Tictactoe.possibleMoves(grid).forEach((moves) => {
        //need to make the current move and add it to the grid and then calculate
        grid[moves[0]][moves[1]] = player;
        var value = this.recursionDepth(player, grid, false, depth + 1, depthCap);
        max = Math.max(value, max);
        grid[moves[0]][moves[1]] = -1;
      });

      return max;
    } else {
      var min = Number.MAX_SAFE_INTEGER;

      Tictactoe.possibleMoves(grid).forEach((moves) => {
        //i think i need to flip the player here?
        grid[moves[0]][moves[1]] = humanPlayer;
        var value = this.recursionDepth(player, grid, true, depth + 1, depthCap);
        min = Math.min(value, min);
        grid[moves[0]][moves[1]] = -1;
      });

      return min;
    }
  }

}
