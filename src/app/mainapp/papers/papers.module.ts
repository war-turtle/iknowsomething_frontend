import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PapersRoutingModule } from './papers-routing.module';
import { PaperViewComponent } from './paper-view/paper-view.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [PaperViewComponent, UploadComponent],
  imports: [
    CommonModule,
    PapersRoutingModule
  ]
})
export class PapersModule { }
