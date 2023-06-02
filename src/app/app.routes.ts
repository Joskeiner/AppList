import { Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'pelicula-list',
    loadComponent: () => import('./pelicula-list/pelicula-list.page').then( m => m.PeliculaListPage),canActivate:[IngresadoGuard]
  },
  {
    path: 'profile/:id',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'buscar',
    loadComponent: () => import('./buscar/buscar.page').then( m => m.BuscarPage),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
    //canActivate:[NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.page').then( m => m.RegistroPage),
    //canActivate:[NoIngresadoGuard]
  },
];
