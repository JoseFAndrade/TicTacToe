import { Component, OnInit } from '@angular/core';
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

  socket: SocketService = new SocketService();

  constructor() {

    console.log("testing");
    this.socket.registerRoomStuff.subscribe( data => {
      console.log("message received?");
      console.log(data);
    });

  }


  onTileClick(event: PointerEvent, x: number, y: number) {

  }

  create(roomid: String){
    this.socket.createRoom(roomid);
  }

  join(roomid: String){
    this.socket.joinRoom(roomid);
  }
}
