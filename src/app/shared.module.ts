import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';

 
@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent
  ],
  imports:[
    // BrowserModule
    CommonModule
  ],
  exports:[
    CardComponent,
    SpinnerComponent
  ]
})
export class SharedModules { }
