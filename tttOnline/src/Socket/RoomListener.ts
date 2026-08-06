import { observable, Observable } from 'rxjs';
import { Socket } from 'socket.io-client';

const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];


export default function registerRoomListeners(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
      socket.on('game_update:game-move', (... data) => {
        console.log(data);
        subscriber.next(data);
      });

      socket.on('room:player-joined', (data) => {
        console.log("a player has joined");
        subscriber.next(data);
      });

      socket.on("game_update:game-end", (data) => {
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
