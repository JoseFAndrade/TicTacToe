import { Component, OnInit, Signal, signal } from '@angular/core';
import { SocketService } from '../../Socket/SocketService';

@Component({
  selector: 'app-multi',
  imports: [],
  templateUrl: './multiplayer.component.html',
  styleUrl: './multiplayer.component.css',
})
export class Multiplayer {
  board: number[][] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];

  room = signal(-1);
  hostWork: boolean = false;
  joinWork: boolean = false;
  displayCreate: boolean = false;
  displayJoin: boolean = false;
  log = signal("");
  latestMove: boolean = false;
  message: String = "";


  socket: SocketService = new SocketService();
  x: number = -1;
  y: number = -1;

  constructor() {
    console.log('testing');

    this.socket.registerRoomStuff.subscribe((data) => {
      console.log('message received?');
      console.log(data);
      this.log.set(data[3] + "The move made: " + data[1] + " " + data[2]);
    });

    console.log(this.hostWork);
  }

  //TODO: decide whether we should just be obtaining the boolean or the entire callback data including the message
  onTileClick(event: PointerEvent, x: number, y: number) {
    console.log(x + '   ' + y);
    this.x = x;
    this.y = y;
  }

  async create(roomId: String) {
    this.displayCreate = true;
    this.displayJoin = false;
    var id: number = +roomId;
    var message = await this.socket.createRoom(id);
    if (message) {
      this.hostWork = true;
      console.log("what");
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

    console.log("what");
    let list: any[] = [this.socket.getId(),[this.x, this.y]];
    var response = await this.socket.makeMove(this.room(), list);
    if (response) {
      //alert('The move worked');
      console.log("move worked");
    }
  }
}
