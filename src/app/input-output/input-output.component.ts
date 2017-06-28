import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

serverElements = [];

  prenomAccueil:string = "toto";

  compteurAccueil:number = 10;

  constructor() { }

  ngOnInit() {
  }

    private onServerAdded(serverData:{serverName:string,serverContent:string}) {

      this.serverElements.push({
        type:'server',
        name:serverData.serverName,
        desc:serverData.serverContent
      });
  }

    private onBlueprintAdded(serverData:{serverName:string,serverContent:string}) {

      this.serverElements.push({
        type:'blue',
        name:serverData.serverName,
        desc:serverData.serverContent
      });
  }

  private mettreAJourAccueil(nombre:number) : void{
        
        this.compteurAccueil = nombre;
  }

}
