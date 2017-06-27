import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  // serverElements = [{type:'server',name:'Testserver',desc:'pour le test'}];
  serverElements = [];

  prenomAccueil:string = "toto";

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



}
