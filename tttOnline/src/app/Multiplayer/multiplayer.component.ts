import { Component, inject, OnInit, Renderer2, Signal, signal } from '@angular/core';
import { SocketService } from '../../Socket/SocketService';

@Component({
  selector: 'app-multi',
  imports: [],
  templateUrl: './multiplayer.component.html',
  styleUrl: './multiplayer.component.css',
})
export class Multiplayer {
  /*
  board: number[][] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];*/

  board: string[][] = new Array(3).fill(new Array(3).fill("-1"));

  room = signal(-1);
  hostWork: boolean = false;
  joinWork: boolean = false;
  displayCreate: boolean = false;
  displayJoin: boolean = false;
  log = signal('');
  latestMove: boolean = false;
  message: String = '';

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
    console.log(this.board);

    this.socket.registerRoomStuff.subscribe((data) => {
      console.log('message received?');
      console.log(data);

      if(this.is2DArray(data[0])){
        console.log("Wtf");
        this.board = data[0] as string[][];
      }

      //this.board = data[0];

      this.log.set(data[3] + 'The move made: ' + data[1] + ' ' + data[2]);
    });

    console.log(this.hostWork);
  }

  //TODO: decide whether we should just be obtaining the boolean or the entire callback data including the message
  onTileClick(event: PointerEvent, x: number, y: number) {
    console.log(x + '   ' + y);
    this.x = x;
    this.y = y;
    this.cachedTag = event.target as HTMLElement;
  }

  async create(roomId: String) {
    this.displayCreate = true;
    this.displayJoin = false;
    var id: number = +roomId;
    var message = await this.socket.createRoom(id);
    if (message) {
      this.hostWork = true;
      console.log('what');
      this.room.set(id);
    } else {
      this.hostWork = false;
      this.room.set(-1);
    }
  }

  async join(roomId: String) {
    var id: number = +roomId;
    var message = await this.socket.joinRoom(id);

    if (message) {
      this.room.set(id);
    } else {
      alert('Room does not exist try to join a room that has a player');
      this.room.set(-1);
    }
  }

  async makeMove() {
    console.log('what');
    let list: any[] = [this.socket.getId(), [this.x, this.y]];
    this.renderer.setStyle(this.cachedTag, 'background-color', 'blue');
    var response = await this.socket.makeMove(this.room(), list);
    if (response) {
      alert('The move worked');
      console.log('move worked');
    }
  }
}
