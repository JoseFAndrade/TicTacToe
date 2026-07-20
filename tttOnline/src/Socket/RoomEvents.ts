import { Socket } from 'socket.io-client';

const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];



export default function registerRoomEvents(socket: Socket){
  //socket.on("")
}
