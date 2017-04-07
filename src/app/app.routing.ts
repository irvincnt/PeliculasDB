import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PersonsComponent } from './persons/persons.component';
import { TvComponent } from './tv/tv.component';

export const routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'persons',
        component: PersonsComponent
    },
    {
        path: 'tv',
        component: TvComponent
    },
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);