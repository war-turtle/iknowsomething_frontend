import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from '../guards/auth-guard.service';

const routes: Routes = [
  { path: 'profile/:username', canActivate: [AuthGuardService], component: ProfileComponent },
  { path: 'blogs',  canActivate: [AuthGuardService], loadChildren: './blogs/blogs.module#BlogsModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesModule' },
  { path: 'papers', loadChildren: './papers/papers.module#PapersModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainappRoutingModule { }
