import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PeoplesServices } from '../services/people.service'; 

@Component({
    selector: 'persons',
    templateUrl: 'persons.component.html',
    styleUrls: ['persons.component.css']
})

export class PersonsComponent implements OnInit {
    peoples;
    img_link = 'https://image.tmdb.org/t/p/w342';
    constructor(private service: PeoplesServices) { }

    ngOnInit() { 
        this.service.getPeoples()
            .subscribe(
                peoples => this.peoples = peoples,
                err => {
                    'Error en el servidor'
                });
    }
}