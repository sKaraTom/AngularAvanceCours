import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertSuccesComponent } from "app/alert-succes/alert-succes.component";
import { BindingCarrouselComponent } from './binding-carrousel/binding-carrousel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from "app/app-routing.module";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CompteurComponent } from './compteur/compteur.component';
import { InputOutputComponent } from './input-output/input-output.component';


@NgModule({
  declarations: [
    AlertSuccesComponent,AppComponent, BindingCarrouselComponent,
    AccueilComponent, CockpitComponent, ServerElementComponent, 
    CompteurComponent, InputOutputComponent
  ],
  imports: [
    FormsModule,CommonModule,BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
