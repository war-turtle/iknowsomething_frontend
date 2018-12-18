import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { OnboardComponent } from './onboard/onboard.component';
import { AuthServiceClass } from './auth.service';
import { OnBoardGuard } from './auth-onboard.guard';

@NgModule({
  declarations: [LoginComponent, OnboardComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [AuthServiceClass, OnBoardGuard]
})
export class AuthModule { }
