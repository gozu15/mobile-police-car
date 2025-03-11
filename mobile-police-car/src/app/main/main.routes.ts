import { Routes } from '@angular/router';

export const routesMain: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('../folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'police-profile',
    loadComponent: () =>
      import('./police-profile/police-profile.page').then((m) => m.PoliceProfile),
  },
  
];
