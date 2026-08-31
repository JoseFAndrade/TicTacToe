import { observable, Observable } from 'rxjs';
import { Socket } from 'socket.io-client';

const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];



export function registerTurn(socket: Socket): Observable<any> {
  return new Observable(subscriber => {
    socket.on('game_update:player-turn', (...data) => {
      subscriber.next(data);
    });
  });
}



export function registerGameEnd(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
      socket.on('game_update:game-end', (... data) => {
        subscriber.next(data);
      });
    });
}

export function registerPlayerJoined(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
        socket.on('room:player-joined', (... data) => {
          console.log('a player has joined');
          console.log(data);
          subscriber.next(data);
        });
    });
}

export function registerMoveListener(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
      socket.on('game_update:game-move', (... data) => {
        console.log(data);
        subscriber.next(data);
      });

    });

    /*
    return new Observable(subscriber => {
      socket.on("room:created", (data) => {
        subscriber.next(data);
      });
    })
    */
  }
