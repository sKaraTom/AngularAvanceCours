import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.css']
})
export class CompteurComponent implements OnInit {

  // récupérer la valeur initiale du compteur depuis le parent(AccueilComponent)
  @Input()
  compteur:number;

  // exporter la valeur du compteur au parent
  @Output()
  mettreAJourCompteur = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  private incrementer() : void {
    this.compteur++;
    
    // émettre la valeur du compteur.
    this.mettreAJourCompteur.emit(this.compteur);
  }

    private decrementer() : void {
    this.compteur--;
    this.mettreAJourCompteur.emit(this.compteur);
  }

}
