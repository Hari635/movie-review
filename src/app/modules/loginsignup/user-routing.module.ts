import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';

const routes: Routes = [
    {
        path: "login",
        component: LoginScreenComponent
    },
    {
        path: "signup",
        component: SignupScreenComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class UserRoutingModule{
    
}