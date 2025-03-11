import { Routes } from '@angular/router';
import { routesMain } from './main/main.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent:()=> import ('./main/main.page').then(m => m.MainPage),
    children:routesMain
  },
  {
    path: 'authentication',
    loadComponent: () =>
      import('./core/authentication/authentication.page').then((m) => m.AuthenticationPage),
  },
];
