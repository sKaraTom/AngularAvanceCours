import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  serverElements = [];
  newServerName:string = "";
  newServerDesc:string = "";


  constructor() { }

  ngOnInit() {
  }

  public onAddServer():void{

      this.serverElements.push({
        type:'server',
        name:this.newServerName,
        desc:this.newServerDesc
      });

  }

  public onAddBluePrint():void {
    this.serverElements.push({
        type:'bleu',
        name:this.newServerName,
        desc:this.newServerDesc
    });

  }



}
