import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapersRoutingModule } from './papers-routing.module';
import { ChooseComponent } from './choose/choose.component';
import { SeeComponent } from './see/see.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [ChooseComponent, SeeComponent, UploadComponent, FormComponent],
  imports: [
    CommonModule,
    PapersRoutingModule,
    FormsModule
  ]
})
export class PapersModule { }
