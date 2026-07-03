import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Multi } from './multi/multi';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'multiplayer', component:Multi}
];
