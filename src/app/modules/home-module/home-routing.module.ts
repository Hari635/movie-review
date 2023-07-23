import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { FavouriteScreenComponent } from "./favourite-screen/favourite-screen.component";
import { HomeScreenComponent } from "./home-screen/home-screen.component";

const routes:Routes=[
    {
        path:"",
        component:HomeScreenComponent,
        
    },
    {
        path:"favourite",
        component:FavouriteScreenComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class HomeRoutingModule { }