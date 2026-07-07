const roomEvents = ['room:created', 'room:error', 'room:full-players', 'room:player-joined'];


export default function registerRoomListeners(socket){
  socket.on("room:created", (data)=> {

  })
}
