import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Multiplayer } from './Multiplayer/multiplayer.component';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'multiplayer', component:Multiplayer}
];
