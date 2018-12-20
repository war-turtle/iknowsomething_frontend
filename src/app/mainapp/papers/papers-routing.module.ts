import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseComponent } from './choose/choose.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { UploadComponent } from './upload/upload.component';
import { SeeComponent } from './see/see.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: ChooseComponent },
  { path: 'see', canActivate: [AuthGuardService], component: SeeComponent },
  { path: 'upload', canActivate: [AuthGuardService], component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PapersRoutingModule { }
