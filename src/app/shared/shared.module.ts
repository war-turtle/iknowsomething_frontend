import {NgModule} from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediumEditorComponent } from './medium-editor/medium-editor.component';

@NgModule({
  declarations: [
    NavbarComponent,
    MediumEditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    MediumEditorComponent
  ]
})
export class SharedModule {}
