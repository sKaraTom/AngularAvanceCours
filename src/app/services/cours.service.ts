import { Injectable } from '@angular/core';

import { Http } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";

import { Cours } from "app/objets-metiers/cours";

@Injectable()
export class CoursService {

  listeCours:Cours[];


  constructor(private http:Http) { }


  public obtenirListeApi() {

    return this.http.get("http://192.168.1.82:4000/courses")
            // .do(x => console.dir(x))
            .map(cours => cours.json());
}



}
