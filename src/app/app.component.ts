import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 


  title = `app v${VERSION.full}`;
  motInput:String;
  couleurBouton:string;
  date : Date;
  height:string = "400";
  nombre:number = 0;

  image : string;
  imageChuck:string;
  idImage:number = 1;

  listeChuck:string[];
  listeImages:string[];

  index:number=0;


  constructor() {
    this.motInput = "Caramba";
    this.couleurBouton = "indianred";
    // this.image = "./assets/01.jpg";
    this.listeChuck = ["./assets/1.JPG","./assets/2.JPG","./assets/3.JPG","./assets/4.JPG",
  "./assets/5.JPG","./assets/6.JPG","./assets/7.JPG"];

    this.listeImages = ["./assets/01.jpg","./assets/02.jpg","./assets/03.jpg","./assets/04.jpg",
    "./assets/05.jpg"];
    
}

  ngOnInit(): void {
    this.jouerCarrouselAleatoire();
    
    this.jouerCarrouselAuto();
     setInterval(() => {
                this.jouerCarrouselAuto(); 
                }, 400);
  
  }



// fonction Javascript
clickEvent = function() {
    alert('vous avez cliqué');
}

// syntaxe fonctionnelle Ecma script 6 (ES6)
clickEventFonctionnel = () =>{
    alert('vous avez cliqué sur le bouton en fonctionnel');
}


private changerLeMot() : void {
  
  if(this.motInput == "Caramba") {
    this.motInput = "Sacrebleu";
  }

  else if(this.motInput == "Sacrebleu") {
    this.motInput = "Caramba";
  }

}

private afficherDate() : void {
        this.date = new Date();
}

private incrementerNombre(): void {

      this.nombre++;
}

private jouerCarrouselAleatoire() : void {

    let nbreAleatoire = Math.floor(Math.random()*(5))
    console.log(nbreAleatoire);

    this.image = this.listeImages[nbreAleatoire];
}


private jouerCarrouselAuto() : void {

    this.imageChuck = this.listeChuck[this.index];
    
    if(this.index !=7)
      this.index = this.index + 1;

    if(this.index == 6)
      this.index = 0;
}



}
