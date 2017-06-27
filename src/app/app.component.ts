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
  height:string = "100";
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
    
    // définir un intervalle de temps pour rejouer la méthode jouerCarrouselAuto()
    this.jouerCarrouselAuto();
     setInterval(() => {
                this.jouerCarrouselAuto(); 
                }, 400);
  
  }



// fonction Javascript : afficher message d'alerte et toggle couleur du bouton.
clickEvent = function() {
    
    // opérateur ternaire pour toggle sous condition.
    this.couleurBouton == "indianred" ? this.couleurBouton="Cornflowerblue" : this.couleurBouton = "indianred";
    
    alert('vous avez cliqué');

}

// syntaxe fonctionnelle Ecma script 6 (ES6)
clickEventFonctionnel = () =>{
    alert('vous avez cliqué sur le bouton en fonctionnel');
}


private changerLeMot() : void {

    //opérateur ternaire pour toggle de mot
    this.motInput == "Caramba" ? this.motInput ="Sacrebleu" : this.motInput = "Caramba";
}

private afficherDate() : void {
        this.date = new Date();
}

private incrementerNombre(): void {
      this.nombre++;
}

private jouerCarrouselAleatoire() : void {

    // générer un nombre aléatoire arrondi à l'inférieur (sinon chiffre avec décimales)
    let nbreAleatoire = Math.floor(Math.random()*(5))

    this.image = this.listeImages[nbreAleatoire];
}


private jouerCarrouselAuto() : void {

    this.imageChuck = this.listeChuck[this.index];
    
    //incrémenter de 1 l'index tant qu'on arrive pas au bout.
    if(this.index !=7)
      this.index = this.index + 1;

    // si on arrive au bout, recommencer du début.
    if(this.index == 7)
      this.index = 0;
}



}
