import { Component, inject, OnInit, Renderer2, Signal, signal } from '@angular/core';
import { SocketService } from '../../Socket/SocketService';

@Component({
  selector: 'app-multi',
  imports: [],
  templateUrl: './multiplayer.component.html',
  styleUrl: './multiplayer.component.css',
})

/**TODO
 * integrate a stop to the game until it detects two players -> WIP
 * fix the fact that all messages are going through one function - check -> maybe removed these functions idk it kind of helps to decouple
 */
export class Multiplayer {
  /*
  board: number[][] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];*/

  display = false;
  displayMessage = signal("");
  selectedColor = "";
  board: string[][] = new Array(3).fill(new Array(3).fill("-1"));

  room = signal(-1);
  //hostWork: boolean = false;
  //joinWork: boolean = false;
  //displayCreate: boolean = false;
  //displayJoin: boolean = false;
  log = signal('');
  latestMove: boolean = false;
  message: String = '';
  firstTurn = signal("");

  socket: SocketService = new SocketService();

  x: number = -1;
  y: number = -1;
  cachedTag: HTMLElement | undefined;
  private renderer = inject(Renderer2);

  is2DArray<T>(value: any): value is T[][] {
    return Array.isArray(value) && (value.length === 0 || Array.isArray(value[0]));
  }

  constructor() {
    console.log('testing');
    for(var i = 0; i < 3; i++){
      for(var y = 0; y < 3; y++){
        this.board[i][y] = '-1';
      }
    }

    this.socket.registerGameEnd.subscribe((data) => {
      this.log.set("The game has currently ended. The grid will not update anymore. The winner is: " + data[0]);

    });

    this.socket.registerPlayerJoin.subscribe((data) => {
      console.log(data);
      this.log.set("The player " + data[0] + " has joined the room");
    })

    this.socket.registerMoveListener.subscribe((data) => {
      //data coming in => grid,x, y, playerId, log
      console.log(data);

      this.board = data[0];

      this.log.set(data[4] + "The move that was made was: " + data[1]+ data[2]);
      //this.log.set(data[3] + 'The move made: ' + data[1] + ' ' + data[2]);
    });

    this.socket.registerTurn.subscribe((data) => {
      console.log(data[0]);
      console.log("message 2");
      this.firstTurn.set(data[0]);
    });

    console.log(this.board);
    console.log(this.socket.getId());
  }

  //TODO: decide whether we should just be obtaining the boolean or the entire callback data including the message
  onTileClick(event: PointerEvent, x: number, y: number) {
    console.log(x + '   ' + y);
    this.x = x;
    this.y = y;
    this.cachedTag = event.target as HTMLElement;
  }

  async create(roomId: String) {
    //this.displayCreate = true;
    //this.displayJoin = false;

    this.display = true;
    var id: number = +roomId;
    var message = await this.socket.createRoom(id);
    if (message) {
      this.displayMessage.set('You have created the room successfully');
      this.selectedColor = "green";
      this.room.set(id);
    } else {
      this.displayMessage.set('Creating a room with this number has not worked. Please try another number instead');
      this.selectedColor = "red";
      this.room.set(-1);
    }
  }

  async join(roomId: String) {
    var id: number = +roomId;
    var message = await this.socket.joinRoom(id);

    if (message) {
      this.room.set(id);
      this.displayMessage.set('You have created the room successfully');
      this.selectedColor = "green";
    } else {
      //alert('Room does not exist try to join a room that has a player');
      this.displayMessage.set(
        'Creating a room with this number has not worked. Please try another number instead',
      );
      this.selectedColor = "red";
      this.room.set(-1);
    }
  }

  async makeMove() {
    console.log('what');
    let list: any[] = [this.socket.getId(), [this.x, this.y]];
    this.renderer.setStyle(this.cachedTag, 'background-color', 'blue');
    var response = await this.socket.makeMove(this.room(), list);
    if (response === "ok") {
      alert('The move worked');
      console.log('move worked');
    }
    else if( response === "error-two") {
      alert("Please wait until another player connects to the lobby. The log will update when another player joins");
      this.renderer.setStyle(this.cachedTag, 'background-color', 'black');
    }
    else{
      this.renderer.setStyle(this.cachedTag, 'background-color', "black");
      this.log.set("Please wait your turn. It is currently the other players turn");
    }
  }
}
