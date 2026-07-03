import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  constructor() {
    //this.socket = io('https://backend-test-3jyw.onrender.com'); // Connect to Node.js backend
    this.socket = io('ws://localhost:3000');
  }

  createGame(gameId: string) {
    this.socket.emit('createGame', gameId);
  }

  joinGame(gameId: string) {
    this.socket.emit('joinGame', gameId);
  }

  test(){
    this.socket.emit("test","Test");
  }

  makeMove(gameId: string, moveData: any) {
    this.socket.emit('makeMove', { gameId, moveData });
  }

  listenToMoves(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('test event', (data) => subscriber.next("I think it worked?"));//observer.next(data));
    });
  }

  listenToYes(): Observable<any>{
    return new Observable((subscriber) => {
      this.socket.on("yes", (data) => {
        subscriber.next(data);
      })
    })
  }

  // Add additional listeners for 'gameCreated' and 'playerJoined' as needed
}

//var test = new SocketService();
//test.listenToMoves().subscribe((data) => console.log(data));
//test.listenToYes().subscribe((data) => console.log(data));
//test.test();
//console.log("what");
