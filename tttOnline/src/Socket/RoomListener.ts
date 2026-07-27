import { observable, Observable } from 'rxjs';
import { Socket } from 'socket.io-client';

const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];


export default function registerRoomListeners(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
      socket.on("event", (data) => {
        subscriber.next(data);
      });

      socket.on("room:created", (data) => {
        console.log("Room created message received.")
        console.log(data);
        subscriber.next(data);
      })
    });

    /*
    return new Observable(subscriber => {
      socket.on("room:created", (data) => {
        subscriber.next(data);
      });
    })
    */
  }
