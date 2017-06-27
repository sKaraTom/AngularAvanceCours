import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  
  @Input()prenomServer:string;


  @Input() element:{type:string,name:string,desc:string};


  constructor() { 


  }

  ngOnInit() {
    
    // console.log(this.prenomServer);

}

}
