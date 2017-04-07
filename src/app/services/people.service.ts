import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeoplesServices{
    constructor(private http: Http){}

    /**
     * Get all people
     */
    getPeoples(){
        return this.http.get("https://api.themoviedb.org/3/person/popular?api_key=2eedb2a90a18f04f1c5752dd930ac5ac&language=es&page=1")
            .map( res => res.json().results)
            .catch(err => {
                return Observable.throw(err.json().data || 'Server error');
            });
    }
}