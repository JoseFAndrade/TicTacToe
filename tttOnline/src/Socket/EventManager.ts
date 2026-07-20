import { map, Observable } from 'rxjs';

export interface IEvent {
  name: string;
  handle(): void;
}

export class EventManager{
  _map = new Map<string, IEvent>;


  constructor() {

  }

  private addEvent( event: IEvent){
    if(!this._map.has(event.name)){
      this._map.set(event.name, event);
    }
  }

  /*
  handleEvent(name: string){
    if(this._map.has(name)){
      return this._map.get(name);
    }

    // @ts-ignore
    return void;
  }*/

  /*
  handleEvent(socket): Observable<any> {
    return new Observable( subscriber => {
      socket.onAny((eventName, ...args))
    })
  }*/
}
