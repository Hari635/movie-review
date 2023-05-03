import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { LoginsignupModule } from "../app/modules/loginsignup/loginsignup.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginsignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
