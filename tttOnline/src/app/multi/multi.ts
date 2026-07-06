import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../SocketService';

@Component({
  selector: 'app-multi',
  imports: [],
  templateUrl: './multi.html',
  styleUrl: './multi.css',
})
export class Multi {
  board: number[][] = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ];

  socket: SocketService = new SocketService();


  onTileClick(event: PointerEvent, x: number, y: number) {

  }

  create(roomid: String){
    this.socket.createRoom(roomid);
  }
}
