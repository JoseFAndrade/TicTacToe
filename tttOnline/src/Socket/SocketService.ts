import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import registerRoomEvents from './RoomEvents';
import registerRoomListeners from './RoomListener';


/*TODO
 * Look up how to make it so that this class will only ever be created once per web page???
 *  so if we nagivate to this page then home then back to this page make sure that the sockets are either the same or getting closed
 */

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  registerRoomStuff;

  constructor() {
    //this.socket = io('https://backend-test-3jyw.onrender.com'); // Connect to Node.js backend
    this.socket = io('ws://localhost:3000');
    this.registerRoomStuff = registerRoomListeners(this.socket);
  }

  createRoom(gameId: String) {
    this.socket.emit('createRoom', { id: gameId, data: '' });
  }

  joinRoom(gameId: String) {
    this.socket.emit('joinRoom', { id: gameId, data: '' });
  }

  makeMove(gameId: string, moveData: any) {
    this.socket.emit('makeMove', { gameId, moveData });
  }

  listenToRoomEvents(): Observable<any> {
    return new Observable((subscriber) => {
      //this.socket;
    });
  }

  listenToMoves(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('test event', (data) => subscriber.next('I think it worked?')); //observer.next(data));
    });
  }

  listenToYes(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('yes', (data) => {
        subscriber.next(data);
      });
    });
  }

  // Add additional listeners for 'gameCreated' and 'playerJoined' as needed
}

//var test = new SocketService();
//test.listenToMoves().subscribe((data) => console.log(data));
//test.listenToYes().subscribe((data) => console.log(data));
//test.test();
//console.log("what");
