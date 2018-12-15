import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperViewComponent } from './paper-view/paper-view.component';
import { UploadComponent } from './upload/upload.component';
import { CourseComponent } from './course/course.component';
import { BranchComponent } from './branch/branch.component';
import { SemesterComponent } from './semester/semester.component';

const routes: Routes = [
  { path: ':course', component: CourseComponent },
  { path: ':course/:branch', component: BranchComponent },
  { path: ':course/:branch/:sem', component: SemesterComponent },
  { path: ':course/:branch/:sem/:code', component: PaperViewComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapersRoutingModule {}
