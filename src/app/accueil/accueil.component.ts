import { Component, OnInit } from '@angular/core';
import { CoursService } from "app/services/cours.service";
import { Cours } from "app/objets-metiers/cours";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  listeCours:Cours[] = [];

  messageErreur:string;


  constructor(private coursService:CoursService) { }

  ngOnInit() {
      this.obtenirListeCours();

  }

  public obtenirListeCours():void {

      this.coursService.obtenirListeApi()
                .subscribe(res => this.listeCours = res,
                           err => this.messageErreur = "erreur à la récupération de la liste de cours.");

  }


}
