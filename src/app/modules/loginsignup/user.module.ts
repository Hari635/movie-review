import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [
    LoginScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports:[
    LoginScreenComponent,
    SignupScreenComponent,
   
  ]
})
export class UserModule { }
