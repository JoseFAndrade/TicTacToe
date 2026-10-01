import { observable, Observable } from 'rxjs';
import { Socket } from 'socket.io-client';

const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];

/**
 * Terrible way of doing this because on connection was for some reason not working out for me will fix later
 * @param socket
 */
export function registerSocketID(socket: Socket): Observable<any> {
  return new Observable((subscriber) => {
    socket.on('socketID', (data) => {
      console.log(socket.id);
      subscriber.next(socket.id);
    });
  });
}

export function playersInLobby(socket: Socket): Observable<any> {
    return new Observable(subscriber => {
        socket.on('lobby_update:player-list', (data) =>{
            subscriber.next(data);
        });
    })
}

export function registerError(socket: Socket): Observable<any>{
  return new Observable(subscriber => {
    socket.on("connect_error", (error) =>{
      subscriber.next(error);
    })
  })
}

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

export function registerDisconnect(socket: Socket): Observable<any> {
  return new Observable(subscriber => {
    socket.on("disconnect", (reason, description) => {
      //maybe in the future this will be more detailed and contain a more specific way of handling different errors
      subscriber.next("disconnect");
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
