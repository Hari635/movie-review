import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { FavouriteScreenComponent } from './favourite-screen/favourite-screen.component';
import { HomeRoutingModule } from './home-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import { CardComponent} from 'src/app/components/card/card.component';
import { AppModule } from 'src/app/app.module';
import { SharedModules } from 'src/app/shared.module';



@NgModule({
  declarations: [
    HomeScreenComponent,
    FavouriteScreenComponent,
    // CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    SharedModules
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModuleModule { }
