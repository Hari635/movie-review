import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FavouriteScreenComponent } from './favourite-screen/favourite-screen.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeScreenComponent,
    FavouriteScreenComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModuleModule { }
