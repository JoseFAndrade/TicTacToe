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

  room: number = -1;
  hasRoom: boolean = false;
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

  create(roomId: String){
    var id: number = +roomId;
    var a = this.socket.createRoom(id);
    console.log(a);
    console.log("test a ");
    if(a){
      this.room = id;
      this.hasRoom = true;
    }
    else{
      this.hasRoom = false;
    }
  }

  join(roomId: String){
    var id: number = +roomId;
    this.socket.joinRoom(id);
  }
}
