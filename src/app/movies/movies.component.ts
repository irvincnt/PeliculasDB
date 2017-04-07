import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { CharactersServices } from '../services/movies.service'; 


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html',
    styleUrls: ['movies.component.css']
})

export class MoviesComponent implements OnInit {
    movies;
    img_link = 'https://image.tmdb.org/t/p/w342';
    constructor(private service: CharactersServices) { }

    ngOnInit() {
        this.service.getCharacters()
            .subscribe(
                movies => this.movies = movies,
                err => {
                'Error en el servidor'
            });
     }
}