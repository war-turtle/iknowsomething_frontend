import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainappRoutingModule } from './mainapp-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    MainappRoutingModule
  ]
})
export class MainappModule { }
