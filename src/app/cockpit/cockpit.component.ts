import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') bluePrintCreate = new EventEmitter<{serverName:string,serverContent:string}>();

  newServerName:string = "";
  newServerDesc:string = "";
  
  

  constructor() { }

  ngOnInit() {
  }


  public onAddServer():void{
      console.log("cockpit onAddServer");
      this.serverCreated.emit({
        serverName:this.newServerName,
        serverContent:this.newServerDesc
      });

  }

  public onAddBluePrint():void {
    console.log("cockpit onAddBluePrint");
    this.bluePrintCreate.emit({
        serverName:this.newServerName,
        serverContent:this.newServerDesc
    });

  }



}
