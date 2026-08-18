import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import registerRoomEvents from './RoomEvents';
import { registerGameEnd, registerMoveListener, registerPlayerJoined } from './RoomListener';


/*TODO
 * Look up how to make it so that this class will only ever be created once per web page???
 *  so if we nagivate to this page then home then back to this page make sure that the sockets are either the same or getting closed
 */

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  registerMoveListener;
  registerGameEnd;
  registerPlayerJoin;
  constructor() {
    //this.socket = io('https://backend-test-3jyw.onrender.com'); // Connect to Node.js backend
    this.socket = io('ws://localhost:3000');

    this.registerGameEnd = registerGameEnd(this.socket);
    this.registerPlayerJoin = registerPlayerJoined(this.socket);
    this.registerMoveListener = registerMoveListener(this.socket);
  }

  async createRoom(gameId: number) {
    /**return this.socket.timeout(5000).emit('createRoom', gameId, (response: any) => {
      console.log(response);
      console.log(response.status);
      return response.status === "error";
    });*/
    const response = await this.socket.emitWithAck('createRoom', gameId);
    return response.status !== 'error';
  }

  async joinRoom(gameId: number) {
    //this.socket.emit('joinRoom', { id: gameId, data: '' });
    const response = await this.socket.emitWithAck('joinRoom', gameId);
    return response.status !== 'error';
  }

  async makeMove(gameId: number, moveData: any) {
    //this.socket.emit('makeMove', { gameId, moveData });
    const response = await this.socket.emitWithAck('gameMove', gameId, moveData);
    return response.status;
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

  getId(): string {
    return <string>this.socket.id;
  }



  // Add additional listeners for 'gameCreated' and 'playerJoined' as needed
}

//var test = new SocketService();
//test.listenToMoves().subscribe((data) => console.log(data));
//test.listenToYes().subscribe((data) => console.log(data));
//test.test();
//console.log("what");
