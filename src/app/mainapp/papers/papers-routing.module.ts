import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperViewComponent } from './paper-view/paper-view.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: ':course/:branch/:sem/:code', component: PaperViewComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapersRoutingModule {}
