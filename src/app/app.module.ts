import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertSuccesComponent } from "app/alert-succes/alert-succes.component";
import { TestComponentComponent } from './test-component/test-component.component';


@NgModule({
  declarations: [
    AlertSuccesComponent,AppComponent, TestComponentComponent
  ],
  imports: [
    FormsModule,CommonModule,BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
