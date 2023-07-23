import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { PageNotComponent } from "./components/page-not/page-not-component.component";

const routes:Routes=[
  {
    path:"",
    loadChildren: () => import('./modules/home-module/home-module.module').then(m => m.HomeModuleModule)
  },
  {
    path:"user",
    loadChildren:()=> import('./modules/loginsignup/user.module').then(m=>m.UserModule)
  },
  {
    path:"**",
    component:PageNotComponent
},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }