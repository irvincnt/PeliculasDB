import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TvsServices } from '../services/tv.service'; 

@Component({
    selector: 'tv',
    templateUrl: 'tv.component.html',
    styleUrls: ['tv.component.css']
})

export class TvComponent implements OnInit {
    tvs;
    img_link = 'https://image.tmdb.org/t/p/w342';
    constructor(private service: TvsServices) { }

    ngOnInit() {
        this.service.getTv()
            .subscribe(
                tvs => this.tvs = tvs,
                err => {
                'Error en el servidor'
            });
     }
}