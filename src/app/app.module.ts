import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PersonsComponent } from './persons/persons.component';
import { TvComponent } from './tv/tv.component';

import { CharactersServices } from './services/movies.service'; 
import { TvsServices } from './services/tv.service'; 


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    PersonsComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    CharactersServices,
    TvsServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
