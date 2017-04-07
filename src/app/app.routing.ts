import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { PersonsComponent } from './persons/persons.component';
import { TvComponent } from './tv/tv.component';

export const routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movie',
        component: MoviesComponent,
        children: [
            {
                path: ':id',
                component: MovieComponent
            }
        ]
    },
    {
        path: 'people',
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