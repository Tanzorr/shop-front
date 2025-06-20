import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.routes').then(m => m.routes),
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.routes),
  },

  { path: '**', redirectTo: 'home' },
];
