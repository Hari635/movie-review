import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserModule } from "./modules/loginsignup/user.module";
import { AppRoutingModule } from './app-routing.module';
import { HomeModuleModule } from './modules/home-module/home-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/card/card.component';
import { PageNotComponent } from './components/page-not/page-not-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
    HomeModuleModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
