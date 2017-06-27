
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

import { BindingCarrouselComponent } from "app/binding-carrousel/binding-carrousel.component";
import { AccueilComponent } from "app/accueil/accueil.component";
import { CockpitComponent } from "app/cockpit/cockpit.component";
import { ServerElementComponent } from "app/server-element/server-element.component";

const appRoutes: Routes = [

{ path: 'accueil', component: AccueilComponent },
{ path: 'cockpit', component: CockpitComponent },
{ path: 'liste', component: ServerElementComponent },
{ path: 'carrousel', component: BindingCarrouselComponent },
  
{ path: '', redirectTo: '/accueil', pathMatch: 'full'}
//   ,{ path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}