import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupScreenComponent } from './signup-screen/signup-screen.component';
import { UserRoutingModule } from './user-routing.module';
import { CardComponent } from 'src/app/components/card/card.component';
import { SharedModules } from 'src/app/shared.module';



@NgModule({
  declarations: [
    LoginScreenComponent,
    SignupScreenComponent,
    // CardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModules
  ],
  exports:[
    LoginScreenComponent,
    SignupScreenComponent,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserModule { }
