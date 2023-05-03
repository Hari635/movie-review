import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';



@NgModule({
  declarations: [
    LoginScreenComponent,
    SignupScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginScreenComponent,
    SignupScreenComponent
  ]
})
export class LoginsignupModule { }
